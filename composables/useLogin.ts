import { ref } from "vue";
import { useMutation } from "@tanstack/vue-query";
import { account } from "@/lib/appwrite"; // Assuming this is your Appwrite account service
import { useAuthStore, useIsLoadingStore } from "~/store/auth.store";
import { useRouter } from "vue-router";
import { useSidebarStore } from "@/store/sidebar.store";


export function useLogin() {
  const router = useRouter();
  const isLoadingStore = useIsLoadingStore();
  const authStore = useAuthStore();
  const errorMessage = ref<string | null>(null);
  const sidebarStore = useSidebarStore();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      // Create a session with email and password
      await account.createEmailPasswordSession(email, password);

      // Fetch user details after successful session creation
      const response = await account.get();

      // Update the authStore if user details are available
      if (response) {
        authStore.setUserData({
          email: response.email,
          name: response.name,
          status: true, // User is authenticated
        });
      }
    },
    onMutate() {
      // Set loading state
      isLoadingStore.set(true);
    },
    async onSuccess() {
      // Reset loading state
      isLoadingStore.set(false);
		sidebarStore.toggleLoginOpen();

      router.push("/");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    },
    onError(error) {
      // Log and display error messages
      console.error("Login error:", error);
      errorMessage.value = "Login failed. Please check your credentials.";
      isLoadingStore.set(false);
    },
  });
}
