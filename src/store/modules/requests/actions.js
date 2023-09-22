import axios from "axios";

export const actions = {
    async fetchRequests({ commit, dispatch }) {
        try {
            const response = await axios.get("http://localhost:3000/pedidos");
            commit("setRequestsData", response.data);
          } catch (error) {
            const errorFeedback = {message: 'Não foi possivel buscar os pedidos.', type: 'error'}
            dispatch('notification/showSnackbar', errorFeedback, {root: true});
          }
    },
}