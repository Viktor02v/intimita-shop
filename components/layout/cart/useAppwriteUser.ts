import { ref, onMounted, watch } from 'vue';
import { account } from '@/lib/appwrite';

export const useAppwriteUser = () => {
  const user = ref();
  const isLoading = ref(true);
  const error = ref(null);

  const fetchUser = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const userDetails = await account.get();
      user.value = userDetails;
    } catch (err) {
      error.value = err.message || 'Failed to fetch user details';
      user.value = null;
    } finally {
      isLoading.value = false;
    }
  };

  // Fetch user data on mount
  onMounted(fetchUser);

  // Watch for any changes to `user` and re-fetch if needed
  watch(user, (newUser) => {
    if (!newUser) {
      fetchUser(); // Re-fetch if there's no user or if it's been cleared
    }
  });

  return {
    user,
    isLoading,
    error,
    fetchUser,
  };
};
