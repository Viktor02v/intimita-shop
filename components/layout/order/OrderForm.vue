<script setup lang="ts">
import { useOrderStore } from "@/store/order.store";

const orderStore = useOrderStore();

const formattedPhone = computed({
  get: () => (orderStore.telRef ? orderStore.telRef.toString() : ""), // Display as string
  set: (value: string) => {
    orderStore.telRef = value.replace(/[^0-9]/g, "")
      ? parseInt(value.replace(/[^0-9]/g, ""))
      : 0; // Store as number, remove non-numeric characters
  },
});
</script>

<template>
  <div class="w-full text-white z-50">
    <form
      class="max-w-[80%] mx-auto flex flex-col justify-center items-center gap-6"
    >
      <UiInput
        v-model="orderStore.countryRef"
        placeholder="Country"
        type="text"
        class="input text-white"
      />
      <UiInput
        v-model="orderStore.cityRef"
        placeholder="City"
        type="text"
        class="input text-white"
      />
      <UiInput
        v-model="orderStore.firstNameRef"
        placeholder="First name"
        type=""
        class="input text-white"
      />
      <UiInput
        v-model="orderStore.lastNameRef"
        placeholder="Last name"
        type="text"
        class="input text-white"
      />
      <UiInput
        v-model="formattedPhone"
        placeholder="Tel"
        type="tel "
        class="input text-white"
      />
      <select
        name="Payment method"
        placeholder="Payment Method"
        id=""
        class="input w-full bg-transparent border-b focus:ring-0 focus:outline-none"
      >
        <option value="Payment Method">Payment Method</option>
        <option :value="(orderStore.paymentRef = 'mastercard')">
          Mastercard
        </option>
        <option :value="(orderStore.paymentRef = 'visa')">Visa</option>
        <option :value="(orderStore.paymentRef = 'paypal')">Paypal</option>
      </select>
    </form>
  </div>
</template>

<style scoped>
.input {
  @apply mb-4 placeholder:text-gray-300 placeholder:text-[12px] text-white border-b border-gray-300 focus-visible:ring-0 focus:outline-none;
}
</style>
