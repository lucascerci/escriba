export const mutations = {
    setCustomersData (state, customers) {
        state.customers = customers;
    },
    requestInit (state) {
        state.loading = true;
    },
    requestFinished (state) {
        state.loading = false;
    },
}
  