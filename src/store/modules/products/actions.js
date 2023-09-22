import { mainApi } from "@/store/api";

export const actions = {
    async fetchProducts({ commit, dispatch }) {
        try {
            const response = await mainApi.get("produtos");
            commit("setProductsData", response.data);
          } catch (error) {
            const errorFeedback = {message: 'Não foi possivel buscar os produtos.', type: 'error'}
            dispatch('notification/showSnackbar', errorFeedback, {root: true});
          }
    },
}