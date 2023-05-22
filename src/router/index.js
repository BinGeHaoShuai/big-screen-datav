import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/traffic",
    component: () => import("../views/index.vue"),
    children: [
      {
        path: "traffic",
        name: "traffic",
        component: () => import("../views/traffic/index.vue"),
      },
      {
        path: "population",
        name: "population",
        component: () => import("../views/population/index.vue"),
      },
      {
        path: "environment",
        name: "environment",
        component: () => import("../views/environment/index.vue"),
      },
      {
        path: "economy",
        name: "economy",
        component: () => import("../views/economy/index.vue"),
      },
    ],
  },
];
const router = new VueRouter({
  routes,
});

export default router;
