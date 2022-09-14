import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "auth" */ "@/layouts/AuthLayout.vue"),
    children: [
      { path: "", redirect: "signin" },
      {
        path: "404",
        name: "404",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/pages/404Page.vue"),
      },
      {
        path: "signin",
        name: "signin",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/pages/SignInPage.vue"),
      },
      {
        path: "signup",
        name: "signup",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/pages/SignUpPage.vue"),
      },
    ],
  },
  {
    path: "",
    component: () =>
      import(/* webpackChunkName: "main" */ "@/layouts/MainLayout.vue"),
    children: [
      {
        path: "main",
        name: "main",
        component: () =>
          import(/* webpackChunkName: "main" */ "@/pages/MainPage.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
