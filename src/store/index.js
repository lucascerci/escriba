import Vuex from "vuex";
import customerModule from "@/store/modules/customer"; // Import your store module

const store = new Vuex.Store({
  modules: {
    customer: customerModule,
  },
});

export default store;
