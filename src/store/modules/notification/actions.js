export const actions = {
  showSnackbar({ commit }, snackbar) {
    commit('setSnackbarMessage', snackbar.message);
    commit('setSnackbarType', snackbar.type);
    commit('setShowSnackbar', snackbar.type);
  },
}