import { mainApi } from "@/store/api";

export const actions = {
    async fetchRequests({ commit, dispatch }) {
        try {
            const response = await mainApi.get("pedidos");
            commit("setRequestsData", response.data);
          } catch (error) {
            const errorFeedback = {message: 'Não foi possivel buscar os pedidos.', type: 'error'}
            dispatch('notification/showSnackbar', errorFeedback, {root: true});
          }
    },
}