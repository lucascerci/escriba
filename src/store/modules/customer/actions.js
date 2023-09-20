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
    async createCustomer(_context, customer) {
      try {
          const response = await axios.post("http://localhost:3000/pessoas", customer);
          return response
        } catch (error) {
          console.error("Error creating customer", error);
        }
    },
}