import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
//import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
	  path: "/",
	  alias: "/patiens",
	  name: "patiens",
	  component: () => import("../components/patientList")
  },
];

const router = new VueRouter({
  routes
});

export default router;
