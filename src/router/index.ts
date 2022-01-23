import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/chapter/:id",
    name: "Chapter",
    component: () =>
      import(/* webpackChunkName: "Chapter" */ "../views/chapter/_id.vue"),
  },
  {
    path: "/hizb/:id",
    name: "hizb",
    component: () =>
      import(/* webpackChunkName: "Hizb" */ "../views/hizb/_id.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
