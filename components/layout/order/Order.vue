<script setup lang="ts">
import { defineProps } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";
import { computed } from "vue";

import { useAddToCart } from "@/composables/useAddToCart";
import { useGetCartProducts } from "@/composables/useGetCartProducts";

const { toggleCartMutation, cartMap } = useCartMutation();
const { data: productsInCart = ref([]) } = useGetCartProducts();

const countryRef = ref("");
const cityRef = ref("");
const firstNameRef = ref("");
const lastNameRef = ref("");
const telRef = ref(0);
const paymentRef = ref("");

const { makeAnOrder } = useMakeAnOrder({
  countryRef: countryRef,
  cityRef: cityRef,
  firstNameRef: firstNameRef,
  lastNameRef: lastNameRef,
  telRef: telRef,
  paymentRef: paymentRef,
});

onMounted(() => {
  if (Array.isArray(productsInCart.value)) {
    productsInCart.value.forEach((product) => {
      cartMap.value[product.$id] = true;
    });
  }
});

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
});

const sidebarStore = useSidebarStore();
onMounted(() => {
  console.log(props.items);
});
console.log(props.items);
</script>
<template>
  <div class="w-full h-full bg-black">
    <div class="w-full text-center">
      <div class="text-3xl font-light text-white pb-8">Order</div>
    </div>
    <div class="w-full text-white">
      <form
        class="max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6"
      >
        <UiInput
          v-model="countryRef"
          placeholder="Country"
          type="text"
          class="text-white border-b"
        />
        <UiInput
          v-model="cityRef"
          placeholder="City"
          type="text"
          class="text-white border-b"
        />
        <UiInput
          v-model="firstNameRef"
          placeholder="First name"
          type=""
          class="text-white border-b"
        />
        <UiInput
          v-model="lastNameRef"
          placeholder="Last name"
          type="text"
          class="text-white border-b"
        />
        <UiInput
          v-model.number="telRef"
          placeholder="Tel"
          type="tel"
          class="text-white border-b"
        />
        <select
          name="Payment method"
          id=""
          class="w-full bg-transparent text-white border-b focus:ring-0 focus:outline-none"
        >
          <option disabled selected hidden></option>
          <option :value="(paymentRef = 'mastercard')">Mastercard</option>
          <option :value="(paymentRef = 'visa')">Visa</option>
          <option :value="(paymentRef = 'paypal')">Paypal</option>
        </select>
      </form>
    </div>
    <div class="w-full flex justify-center py-4">
      <UiButton
        @click="makeAnOrder.mutate()"
        class="inline-block text-white text-center border-b border-gray-400 bg-transparent px-3 hover:bg-transparent rounded-none"
      >
        Make an order
      </UiButton>
      <div class="px-4" />
      <UiButton
        @click="sidebarStore.toggleOrderOpen"
        class="inline-block text-white text-center border-b border-gray-400 bg-transparent px-3 hover:bg-transparent rounded-none"
      >
        Close
      </UiButton>
    </div>
  </div>
</template>

<style scoped></style>
