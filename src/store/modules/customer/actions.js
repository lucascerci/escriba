import { mainApi } from "@/store/api";

export const actions = {
    async fetchCustomers({ commit, dispatch }, filters) {
        commit("requestInit");
        try {
            const response = await mainApi.get("pessoas", { params: filters });
            commit("setCustomersData", response.data);
            commit("requestFinished");
          } catch (error) {
            commit("requestFinished");
            const errorFeedback = {message: 'Não foi possivel buscar os clientes.', type: 'error'}
            dispatch('notification/showSnackbar', errorFeedback, {root: true});
          }
    },
    async createCustomer({ dispatch }, customer) {
      try {
          const response = await mainApi.post("pessoas", customer);
          dispatch("fetchCustomers");
          return response
        } catch (error) {
          const errorFeedback = {message: 'Não foi possivel criar um cliente.', type: 'error'}
          dispatch('notification/showSnackbar', errorFeedback, {root: true});
        }
    },
    async deleteCustomer({ dispatch }, customerId) {
      try {
          const response = await mainApi.delete("pessoas/" + customerId);
          dispatch("fetchCustomers");
          return response
        } catch (error) {
          const errorFeedback = {message: 'Não foi possivel deletar um cliente.', type: 'error'}
          dispatch('notification/showSnackbar', errorFeedback, {root: true});
        }
    },
    async getCustomer({ dispatch }, id) {
      try {
          const response = await mainApi.get("pessoas/" + id);
          return response
        } catch (error) {
          const errorFeedback = {message: 'Não foi encontrado um cliente com essa ID.', type: 'error'}
          dispatch('notification/showSnackbar', errorFeedback, {root: true});
        }
    },
    async editCustomer({ dispatch }, customer) {
      try {
          const response = await mainApi.put("pessoas/" + customer.id, customer);
          dispatch("fetchCustomers");
          return response
        } catch (error) {
          const errorFeedback = {message: 'Não foi possivel editar esse cliente.', type: 'error'}
          dispatch('notification/showSnackbar', errorFeedback, {root: true});
        }
    },
}