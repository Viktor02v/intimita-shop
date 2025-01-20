import { watchEffect, onMounted, reactive, toRefs } from "vue";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { useSidebarStore } from "~/store/sidebar.store";
import { DB_ID, COLLECTION_ORDERS, COLLECTION_CART } from "~/app.constants";
import { v4 as uuidv4 } from "uuid";
import { useIsOrderStore } from "@/store/order.store";
import { set } from "@vueuse/core";

const sidebarStore = useSidebarStore();
const isOrderStore = useIsOrderStore();

interface OrderData {
  countryRef: Ref<string>;
  cityRef: Ref<string>;
  firstNameRef: Ref<string>;
  lastNameRef: Ref<string>;
  telRef: Ref<number>;
  paymentRef: Ref<string>;
}

export function useMakeAnOrder(orderData: OrderData) {
  // Reactive wrapper for the passed refs
  const reactiveOrderData = reactive(orderData);

  watchEffect(() => {
    console.log("Reactive Order Data Updated:", reactiveOrderData);
  });

  onMounted(() => {
    console.log("Reactive Order Data on Mount:", reactiveOrderData);
  });

  watchEffect(() => {
    console.log("Reactive Order Data Changed:", reactiveOrderData);
  });

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
          )
        );

        return { success: true };
      } catch (error) {
        console.error("Error creating order:", error);
        throw new Error("Failed to create the order. Please try again.");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart-products"]);
      sidebarStore.toggleOrderOpen();
      isOrderStore.isOrderComplete = true;
    },
    onError: (error) => {
      console.error("Order creation failed:", error);
    },
    onSettled: () => {
      setTimeout(() => {
        isOrderStore.isOrderComplete = false;
      }, 2000);
    },
  });

  return {
    makeAnOrder,
  };
}
