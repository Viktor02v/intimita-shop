<script setup lang="ts">
import {
  useAuthStore,
  useIsLoadingStore,
  useIsSidebarOpenStore,
} from "@/store/auth.store";
import { v4 as uuid } from "uuid";
import { account } from "~/lib/appwrite";
import { ref, watch, onMounted, computed } from "vue";
import { useSidebarStore } from "@/store/sidebar.store";
import { useLogin } from "~/composables/useLogin";
import { useRegister } from "~/composables/useRegister";

const store = useAuthStore();

const sidebarStore = useSidebarStore();
const { mutate: loginMutate } = useLogin();
const { mutate: registerMutate } = useRegister();

const login = async () => {
  loginMutate({ email: emailRef.value, password: passwordRef.value });
  if (errorMessage) {
    errorMessage.value = "Check your credentials";
  }
};

const register = async () => {
  registerMutate({
    email: emailRef.value,
    password: passwordRef.value,
    name: nameRef.value,
  });
  if (errorMessage) {
    errorMessage.value =
      "All fields are required and must be unique. Please check your credentials";
  }
};

const isSidebarOpen = useIsSidebarOpenStore();

const nameRef = ref("");
const emailRef = ref("");
const passwordRef = ref("");

const onRegistrationOpen = ref(false);
const authStore = useAuthStore();

const errorMessage = ref<string | null>(null);

const loginClasses = computed(() =>
  sidebarStore.isLoginOpen
    ? "translate-x-0 duration-1000 opacity-100"
    : "translate-x-full duration-1000 opacity-100"
);

const logout = async () => {
  try {
    await account.deleteSession("current");
    store.set({ email: "", name: "", status: false });
  } catch (error) {
    console.error("Logout failed:", error);
    errorMessage.value = "Logout failed. Please try again.";
  }
};
onMounted(() => {
  if (performance.navigation.type === 1) {
    isSidebarOpen.set(true);
  }
});

// Watcher for debugging (optional)
watch(sidebarStore, () => {
  console.log("isSidebarOpen:", sidebarStore.isLoginOpen);
});
</script>

<template>
  <div
    id="profile"
    role="dialog"
    aria-labelledby="profile-title"
    :aria-hidden="!sidebarStore.isLoginOpen"
    :class="[
      'fixed top-[120px] right-0 h-[57.7vh] w-[34vw] bg-white py-6 flex flex-col z-50 justify-start items-center',
      loginClasses,
    ]"
  >
    <div class="absolute top-[5vh] right-[5vw] flex flex-col gap-2">
      <button
        @click="logout"
        class="text-[12px] hover:text-[#FFD095] duration-500"
      >
        <Icon
          name="material-symbols:logout-rounded"
          class="w-5 h-5 text-black"
        />
      </button>
    </div>
    <div class="w-[50%]">
      <h1 class="text-3xl font-bold text-center mb-5 text-black">Account</h1>
      <div class="flex gap-5 py-6">
        <UiButton
          @click="onRegistrationOpen = true"
          class="w-full bg-black text-white text-[12px] rounded-2xl px-2 h-8"
        >
          Login
        </UiButton>
        <UiButton
          @click="onRegistrationOpen = false"
          class="w-full bg-white text-black text-[12px] rounded-2xl border border-black px-2 h-8"
        >
          Register
        </UiButton>
      </div>

      <!-- Error message display -->
      <div v-if="errorMessage" class="text-red-500 flex justify-center mb-4">
        {{ errorMessage }}
      </div>
      <div class="w-full flex flex-col justify-center items-center gap-5">
        <div class="w-full">
          <form>
            <UiInput
              v-model="emailRef"
              placeholder="Email"
              type="email"
              class="mb-4 placeholder:text-gray-300 text-black"
            />
            <UiInput
              v-model="passwordRef"
              placeholder="Password"
              type="password"
              class="mb-4 placeholder:text-gray-300 text-black"
            />
            <!-- Only show name input for registration -->
            <UiInput
              v-if="!authStore.isAuth"
              v-model="nameRef"
              placeholder="Name"
              type="text"
              class="mb-4 placeholder:text-gray-300 text-black"
            />
            <div class="flex justify-center items-center gap-5">
              <UiButton
                type="button"
                class="bg-gray-800 text-white rounded hover:bg-gray-700"
                @click="login"
                >Login</UiButton
              >
              <UiButton
                type="button"
                class="bg-gray-800 text-white rounded hover:bg-gray-700"
                @click="register"
                >Register</UiButton
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
