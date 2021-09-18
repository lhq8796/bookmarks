import { createRouter, createWebHashHistory } from "vue-router";

/* Layout */
import Layout from "@/layout";

/* Views */
const NotFound = () =>
  import(/* webpackChunkName: "404" */ "@/views/error-page/404.vue");

const routes = [
  {
    path: "/",
    redirect: "/bookmarks",
  },
  {
    path: "/bookmarks",
    component: Layout,
    children: [
      {
        path: "",
        name: "bookmarks",
        component: () =>
          import(/* webpackChunkName: "bookmarks" */ "../views/Bookmarks.vue"),
      },
    ],
  },
  {
    path: "/demo",
    component: Layout,
    children: [
      {
        path: "",
        name: "demo",
        // route level code-splitting
        // this generates a separate chunk (demo.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "demo" */ "../views/demo/index.vue"),
      },
      {
        path: "js-mvc",
        name: "demo_js-mvc",
        component: () =>
          import(
            /* webpackChunkName: "demo_js-mvc" */ "../views/demo/js-mvc.vue"
          ),
      },
    ],
  },

  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
