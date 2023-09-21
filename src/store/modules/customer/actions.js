import axios from "axios";

export const actions = {
    async fetchCustomers({ commit, dispatch }) {
        try {
            const response = await axios.get("http://localhost:3000/pessoas");
            commit("setCustomersData", response.data);
          } catch (error) {
            const errorFeedback = {message: 'Não foi possivel buscar os clientes.', type: 'error'}
            dispatch('notification/showSnackbar', errorFeedback, {root: true});
          }
    },
    async createCustomer({ dispatch }, customer) {
      try {
          const response = await axios.post("http://localhost:3000/pessoas", customer);
          dispatch("fetchCustomers");
          return response
        } catch (error) {
          const errorFeedback = {message: 'Não foi possivel criar um cliente.', type: 'error'}
          dispatch('notification/showSnackbar', errorFeedback, {root: true});
        }
    },
    async deleteCustomer({ dispatch }, customerId) {
      try {
          const response = await axios.delete("http://localhost:3000/pessoas/" + customerId);
          dispatch("fetchCustomers");
          return response
        } catch (error) {
          const errorFeedback = {message: 'Não foi possivel deletar um cliente.', type: 'error'}
          dispatch('notification/showSnackbar', errorFeedback, {root: true});
        }
    },
    async getCustomer({ dispatch }, id) {
      try {
          const response = await axios.get("http://localhost:3000/pessoas/" + id);
          return response
        } catch (error) {
          const errorFeedback = {message: 'Não foi encontrado um cliente com essa ID.', type: 'error'}
          dispatch('notification/showSnackbar', errorFeedback, {root: true});
        }
    },
    async editCustomer({ dispatch }, customer) {
      try {
          const response = await axios.put("http://localhost:3000/pessoas/" + customer.id, customer);
          dispatch("fetchCustomers");
          return response
        } catch (error) {
          const errorFeedback = {message: 'Não foi possivel editar esse cliente.', type: 'error'}
          dispatch('notification/showSnackbar', errorFeedback, {root: true});
        }
    },
}