import { ref } from "vue";
import { useMutation } from "@tanstack/vue-query";
import { account } from "@/lib/appwrite";

export function usePasswordReset() {
  const errorMessage = ref<string | null>(null);
  const successMessage = ref<string | null>(null);

  const sendResetEmail = useMutation({
    mutationKey: ["sendResetEmail"],
    mutationFn: async (email: string) => {
      // Send recovery email
      await account.createRecovery(email, "http://localhost"); 
    },
    onSuccess() {
      successMessage.value = "Password reset email sent. Check your inbox.";
    },
    onError(error) {
      console.error("Error sending reset email:", error);
      errorMessage.value = "Failed to send password reset email.";
    },
  });

  const resetPassword = useMutation({
    mutationKey: ["resetPassword"],
    mutationFn: async ({
      userId,
      secret,
      newPassword,
      confirmPassword,
    }: {
      userId: string;
      secret: string;
      newPassword: string;
      confirmPassword: string;
    }) => {
      // Complete the password reset
      await account.updateRecovery(userId, secret, newPassword, confirmPassword);
    },
    onSuccess() {
      successMessage.value = "Password has been successfully reset.";
    },
    onError(error) {
      console.error("Error resetting password:", error);
      errorMessage.value = "Failed to reset the password. Check the details.";
    },
  });

  return {
    sendResetEmail,
    resetPassword,
    errorMessage,
    successMessage,
  };
}
