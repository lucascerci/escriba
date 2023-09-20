import axios from "axios";
export const actions = {
    async fetchCustomers({ commit }) {
        console.log('inside get customers')
        try {
            const response = await axios.get("http://localhost:3000/pessoas");
            console.log('response', response)
            commit("setCustomersData", response.data);
          } catch (error) {
            console.error("Error fetching customers:", error);
          }
      },
}