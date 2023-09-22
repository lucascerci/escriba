import Vuex from "vuex";
import customerModule from "@/store/modules/customer"
import notificationModule from "@/store/modules/notification"
import productsModule from "@/store/modules/products"
import RequestsModule from "@/store/modules/requests"

const store = new Vuex.Store({
  modules: {
    notification: notificationModule,
    customer: customerModule,
    product: productsModule,
    requests: RequestsModule
  },
});

export default store;
