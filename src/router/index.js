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
   {
    path: ":name",
    name: "Product Detail",
    component: () => import("../views/ProductDetail.vue"),
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
 {
  path: "/contact",
  component: () => import("../components/layout/LayoutBase.vue"),
  children: [
   {
    path: "",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
   },
  ],
 },
];
const router = createRouter({
 history: createWebHistory(),
 routes,
 scrollBehavior(to, from, savedPosition) {
  // always scroll to top
  return { top: 0 };
 },
});

export default router;
