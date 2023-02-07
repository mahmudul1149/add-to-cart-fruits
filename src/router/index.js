import Vue from "vue";
import VueRouter from "vue-router";
import CartView from "../views/CartView.vue";
import HomeView from "../views/HomeView.vue";
import products from "../views/ProductsView.vue";
import product from "../views/ProductView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product",
    component: CartView,
  },
  {
    path: "/products",
    component: product,
  },
  {
    path: "/test",
    component: products,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
