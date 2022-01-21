import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/chapter/:id",
    name: "chapter",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/chapter/_id.vue"),
  },
  {
    path: "/hizb/:id",
    name: "hizb",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/hizb/_id.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
