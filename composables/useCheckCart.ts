import { ref } from "vue";
import { useAddToCart} from "~/composables/useAddToCart";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import type { Product } from "~/types/product.type";

export function useCartMutation() {
  const { checkIsInCart, addToCart, deleteFromCart } =
    useAddToCart();

	

  const queryClient = useQueryClient();

  // Reactive state
  const cartMap = ref<Record<string, boolean>>({});
  
  const cartProducts = ref<Product[]>([]);

  // Helper functions
  const manageCart = async (product: Product, isInCart: boolean) => {
    try {
      return isInCart
        ? await addToCart.mutate(product)
        : await deleteFromCart.mutate(product);
    } catch (error) {
      console.error("Error managing favorite:", error);
      throw error;
    }
  };

  // Toggle favorite mutation
  const toggleCartMutation = useMutation({
    mutationFn: async (product: Product) => {
      const isInCart = cartMap.value[product.$id];
      await manageCart(product, isInCart);
      return !isInCart;
    },
    onMutate: async (meal: Product) => {
      const currentCartState = cartMap.value[meal.$id];
      cartMap.value[meal.$id] = !currentCartState;

      if (!currentCartState) {
			cartProducts.value = [...cartProducts.value, meal];
      } else {
			cartProducts.value = cartProducts.value.filter((cart) => cart.$id !== meal.$id);
      }

      console.log("Optimistic update for item in cart:", meal.$id);
    },
    onError: (error, meal) => {
      console.error("Error toggling item in cart:", error);
      cartMap.value[meal.$id] = !cartMap.value[meal.$id];
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["cart-products"]);
    },
  });

  return {
	toggleCartMutation,
	cartMap,
	cartProducts,
  };
}
