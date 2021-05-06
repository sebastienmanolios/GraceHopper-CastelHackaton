import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/cities",
    name: "Cities",
    component: () => import("../views/Cities.vue"),
  },
  {
    path: "/map",
    name: "Map",
    component: () => import("../views/Map.vue"),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/NotFound.vue')
  },
  // {
  //   path: '/NetworkIssue',
  //   name: 'NetworkIssue',
  //   component: () => import('../views/NetworkIssue.vue')
  // },
  // Will catch all navigation that doesn't match
  {
    path: '*',
    redirect: { name: '404' }
    // redirect: { name: '404', params: { resource: 'page' } }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
