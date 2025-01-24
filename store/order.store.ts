import { defineStore } from "pinia";
import { ref } from "vue";
import type { Ref } from "vue";

interface OrderData {
  isOrderComplete: boolean;
  countryRef: Ref<string>;
  cityRef: Ref<string>;
  firstNameRef: Ref<string>;
  lastNameRef: Ref<string>;
  telRef: Ref<number>;
  paymentRef: Ref<string>;
}

export const useOrderStore = defineStore("order", {
  state: (): OrderData => {
    const isOrderComplete = false;
    const countryRef = ref<string>("");
    const cityRef = ref<string>("");
    const firstNameRef = ref<string>("");
    const lastNameRef = ref<string>("");
    const telRef = ref<number>(0);
    const paymentRef = ref<string>("");

    return {
      isOrderComplete,
      countryRef,
      cityRef,
      firstNameRef,
      lastNameRef,
      telRef,
      paymentRef,
    };
  },
  actions: {
    toggleOrderComplete() {
      this.isOrderComplete = !this.isOrderComplete;
    },
  },
});
