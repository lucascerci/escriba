import axios from "axios";

export const actions = {
    async fetchCustomers({ commit }) {
        try {
            const response = await axios.get("http://localhost:3000/pessoas");
            commit("setCustomersData", response.data);
          } catch (error) {
            console.error("Error fetching customers:", error);
          }
    },
    async createCustomer({ dispatch }, customer) {
      try {
          const response = await axios.post("http://localhost:3000/pessoas", customer);
          dispatch("fetchCustomers");
          return response
        } catch (error) {
          console.error("Error creating customer", error);
        }
    },
    async deleteCustomer({ dispatch }, customerId) {
      try {
          const response = await axios.delete("http://localhost:3000/pessoas/" + customerId);
          dispatch("fetchCustomers");
          return response
        } catch (error) {
          console.error("Error deleting customer", error);
        }
    },
}