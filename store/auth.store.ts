import { defineStore } from "pinia";
import { ref } from "vue";

// Interface for user data
export interface IAuthStore {
email: string;
status: boolean;
name: string;
}


// Function to return the default state
const getDefaultAuthState = (): { user: IAuthStore } => ({
user: {
   email: "",
   status: false,
   name: "",
},
});

// Auth Store
export const useAuthStore = defineStore("auth", {
	state: () => {
		const errorMessage = ref<string | null>(null);
		const nameRef = ref("");
		const emailRef = ref("");
		const passwordRef = ref("");
		const isFormOpen = ref(false);
		const isRessetFormOpen = ref(false);

		return {
		...getDefaultAuthState(),
		nameRef,
		emailRef,
		passwordRef,
		errorMessage,
		isFormOpen,
		isRessetFormOpen,
		};
	},

getters: {
   isAuth: (state) => state.user.status,
},
actions: {
    // Clear user data
   clear() {
      this.$patch(getDefaultAuthState());
   },

    // Set user data (partially or fully)
   set(input: Partial<IAuthStore>) {
      this.$patch({
      user: {
         ...this.user,
         ...input,
      },
      });
   },

    // New action to set user data
   setUserData(data: IAuthStore) {
      this.$patch({
      user: data,
      });
   },
	toggleForm() {
	this.isFormOpen = !this.isFormOpen;
	this.isRessetFormOpen = false;
	},
	toggleRessetForm() {
		this.isRessetFormOpen = !this.isRessetFormOpen; 
	}
},
});

// Loading State Store
export const useIsLoadingStore = defineStore("isLoading", {
state: () => ({
   isLoading: true,
}),
actions: {
   set(data: boolean) {
      this.$patch({ isLoading: data });
   },

},
});

// Sidebar State Store
export const useIsSidebarOpenStore = defineStore("isSidebarOpen", {
state: () => ({
   isSidebarOpen: false,
}),
actions: {
    // Set the sidebar open state
   set(data: boolean) {
      this.$patch({ isSidebarOpen: data });
   },
    // Toggle the sidebar state
   toggle() {
      this.$patch({ isSidebarOpen: !this.isSidebarOpen });
   },
},
getters: {
   isOpen: (state) => state.isSidebarOpen,
},
});
