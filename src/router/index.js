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
        name: "Bookmarks",
        component: () =>
          import(/* webpackChunkName: "bookmarks" */ "../views/Bookmarks.vue"),
      },
    ],
  },
  {
    path: "/about",
    component: Layout,
    children: [
      {
        path: "",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue"),
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
