import Vue from "vue";
//import App from "./App.vue";
import Main from "./Main.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./styles.scss";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

//import 'spectre.css/dist/spectre.min.js'
//import 'spectre.css/dist/spectre.icon.min.css'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(Main)
}).$mount("#victor");

