import { createWebHistory, createRouter } from "vue-router";

const routes = [
 {
  path: "/",
  component: () => import("../components/layout/LayoutBase.vue"),
  children: [
   {
    path: "",
    name: "Home",
    component: () => import("../views/Home.vue"),
   },
  ],
 },
 {
  path: "/product",
  component: () => import("../components/layout/LayoutBase.vue"),
  children: [
   {
    path: "",
    name: "Product",
    component: () => import("../views/Product.vue"),
   },
  ],
 },
 {
  path: "/about",
  component: () => import("../components/layout/LayoutBase.vue"),
  children: [
   {
    path: "",
    name: "About Us",
    component: () => import("../views/About.vue"),
   },
  ],
 },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

export default router;
