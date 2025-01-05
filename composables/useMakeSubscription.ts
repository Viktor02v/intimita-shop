import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { DB } from "~/lib/appwrite";
import { DB_ID, COLLECTION_SUBSCRIPTION } from "~/app.constants";
import { v4 as uuidv4 } from "uuid";

interface Subscription {
  name: string;
  email: string;
  phone: number;
}

export function useMakeSubscription() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (subscription: Subscription) => {
      try {
        const response = await DB.createDocument(
          DB_ID,
          COLLECTION_SUBSCRIPTION,
          uuidv4(),
          subscription
        );

        if (!response.$id) {
          throw new Error(
            "Failed to create subscription: Missing subscription ID"
          );
        }

        return response;
      } catch (error) {
        console.error("Error creating subscription in Appwrite:", error);
        throw error; // Propagate the error for onError to handle
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["get-subscription"]);
      console.log("Subscription created successfully:", data);
    },
    onError: (error) => {
      console.error("Error creating subscription:", error);
    },
  });
}
