import Vue from "vue";
import App from "./App";
import axios from "axios";

Vue.config.productionTip = false;

Vue.use(axios); // we register axios globally

/* eslint-disable no-new */
new Vue({
	el: "#app",
	template: "<App/>",
	components: { App }
});
