import Vuex from "vuex";
import customerModule from "@/store/modules/customer"; // Import your store module
import notificationModule from "@/store/modules/notification"

const store = new Vuex.Store({
  modules: {
    notification: notificationModule,
    customer: customerModule,
  },
});

export default store;
