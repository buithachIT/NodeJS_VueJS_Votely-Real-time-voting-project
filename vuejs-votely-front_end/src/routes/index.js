import RegisterView from "@/pages/RegisterView.vue";
import FontDemo from "@/components/ui/FontDemo.vue";
import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/register",
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/fonts",
    name: "FontDemo",
    component: FontDemo,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
