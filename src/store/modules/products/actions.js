import axios from "axios";

export const actions = {
    async fetchProducts({ commit, dispatch }) {
        try {
            const response = await axios.get("http://localhost:3000/produtos");
            commit("setProductsData", response.data);
          } catch (error) {
            const errorFeedback = {message: 'Não foi possivel buscar os produtos.', type: 'error'}
            dispatch('notification/showSnackbar', errorFeedback, {root: true});
          }
    },
}