import { watchEffect, onMounted, reactive, toRefs } from "vue";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { useSidebarStore } from "~/store/sidebar.store";
import { DB_ID, COLLECTION_ORDERS, COLLECTION_CART } from "~/app.constants";
import { v4 as uuidv4 } from "uuid";
import type { Product } from "~/types/product.type";
import { useOrderStore } from "@/store/order.store";
import { set } from "@vueuse/core";

const sidebarStore = useSidebarStore();
const orderStore = useOrderStore();

interface OrderData {
  countryRef: Ref<string>;
  cityRef: Ref<string>;
  firstNameRef: Ref<string>;
  lastNameRef: Ref<string>;
  telRef: Ref<string>;
  paymentRef: Ref<string>;
}

const cartMap = reactive<Record<string, boolean>>({});

export function useMakeAnOrder(orderData: OrderData) {
  // Reactive wrapper for the passed refs
const reactiveOrderData = reactive(orderData);

   const initializeCartMap = async () => {
		try {
		const cartItems = await DB.listDocuments(DB_ID, COLLECTION_CART);
		cartItems.documents.forEach((item: Product) => {
			 cartMap[item.$id] = true; // Set the items as present in the cart
		});
		} catch (error) {
		console.error("Error initializing cart map:", error);
		}
	};


const queryClient = useQueryClient();

const makeAnOrder = useMutation({
   mutationKey: ["create-order"],
   mutationFn: async () => {
      try {
      const cartItems = await DB.listDocuments(DB_ID, COLLECTION_CART);

      if (!cartItems.documents.length) {
         return {
            success: false,
            message: "Your cart is empty. Please add items to proceed.",

         };
      }

        // Create orders for each cart item
        await Promise.all(
          cartItems.documents.map(async (product) => {
            const { $id, name, price, description, foto_url } = product;

            if (!name || !price || !description || !foto_url) {
              throw new Error("Invalid product data in the cart.");
            }

            await DB.createDocument(DB_ID, COLLECTION_ORDERS, uuidv4(), {
              name,
              price,
              description,
              foto_url,
              country: reactiveOrderData.countryRef,
              city: reactiveOrderData.cityRef,
              firstName: reactiveOrderData.firstNameRef,
              lastName: reactiveOrderData.lastNameRef,
              tel: reactiveOrderData.telRef,
              payment: reactiveOrderData.paymentRef,
            });
          })
        );

        // Delete all cart items
        await Promise.all(
          cartItems.documents.map((product) =>
            DB.deleteDocument(DB_ID, COLLECTION_CART, product.$id)
          ),
        );

        return { success: true };
		
      } catch (error) {
        console.error("Error creating order:", error);
        throw new Error("Failed to create the order. Please try again.");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart-products"]);
		initializeCartMap();
      sidebarStore.toggleOrderOpen();
      orderStore.isOrderComplete = true;
    },
    onError: (error) => {
      console.error("Order creation failed:", error);
    },
    onSettled: () => {
      setTimeout(() => {
			orderStore.isOrderComplete = false;
      }, 2000);
    },
  });

  return {
    makeAnOrder,
  };
}
