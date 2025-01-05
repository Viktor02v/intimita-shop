<script setup lang="ts">
import { set } from "@vueuse/core";
import { ref } from "vue";
import { useMakeSubscription } from "~/composables/useMakeSubscription";
import { useIsSubscribedStore } from "~/store/subscribed.store";

const isSubscribed = useIsSubscribedStore();
console.log(isSubscribed);
const subscription = ref({
  name: "",
  email: "",
  phone: 0,
});

const formattedPhone = computed({
  get: () =>
    subscription.value.phone ? subscription.value.phone.toString() : "", // Display as string
  set: (value: string) => {
    subscription.value.phone = value.replace(/[^0-9]/g, "")
      ? parseInt(value.replace(/[^0-9]/g, ""))
      : 0; // Store as number, remove non-numeric characters
  },
});
const {
  mutate: makeSubscription,
  isPending,
  isError,
  isSuccess,
} = useMakeSubscription();

const handleSubmit = () => {
  // Basic validation
  if (
    !subscription.value.name ||
    !subscription.value.email ||
    !subscription.value.phone
  ) {
    alert("Please fill in all fields.");
    return;
  }

  makeSubscription(subscription.value, {
    onSuccess: () => {
      subscription.value = { name: "", email: "", phone: 0 }; // Reset form
      setTimeout(() => {
        isSubscribed.toggleIsSubscribed();
      }, 1000);
    },
    onError: (error) => {
      alert("An error occurred while creating the subscription.");
    },
    onSettled: () => {
      isPending.value = false;
      setTimeout(() => {
        isSubscribed.toggleIsSubscribed();
      }, 5000);
    },
  });
};
</script>

<template>
  <div class="w-4/5 h-full">
    <form
      @submit.prevent="handleSubmit"
      class="flex flex-col gap-6 w-full h-full"
    >
      <!-- Name Input -->
      <input
        v-model="subscription.name"
        type="text"
        placeholder="Second name, first name"
        class="w-full border border-gray-400 rounded-2xl px-6 py-2 placeholder:text-sm placeholder:font-light"
      />

      <!-- Phone and Email Inputs -->
      <div class="flex justify-between gap-4 w-full">
        <input
          v-model="formattedPhone"
          type="tel"
          placeholder="Phone number"
          class="w-full border border-gray-400 rounded-2xl px-6 py-2 placeholder:text-sm placeholder:font-light"
        />
        <input
          v-model="subscription.email"
          type="email"
          placeholder="E-mail"
          class="w-full border border-gray-400 rounded-2xl px-6 py-2 placeholder:text-sm placeholder:font-light"
        />
      </div>

      <!-- Consent Checkbox -->
      <div class="flex items-center gap-3 w-full">
        <input
          type="checkbox"
          class="bg-gray-600 w-4 h-4 rounded border-gray-400"
          required
        />
        <p class="text-xs">I agree to the processing of personal data</p>
      </div>

      <!-- Submit Button -->
      <div class="w-full">
        <button
          type="submit"
          :disabled="isPending"
          class="bg-black text-white py-2 px-4 rounded hover:bg-gray-900 disabled:opacity-50 w-full"
        >
          {{ isPending ? "Submitting..." : "Subscribe" }}
        </button>
      </div>

      <!-- Status Messages -->

      <p v-if="isError" class="text-red-500">
        Something went wrong. Please try again.
      </p>
    </form>
  </div>
</template>

<style scoped>
/* Additional styles can be added here */
</style>
