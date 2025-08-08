import RegisterView from "@/pages/RegisterView.vue";
import LoginView from "@/pages/LoginView.vue";
import FontDemo from "@/components/ui/FontDemo.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import HomeView from "@/pages/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home page",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
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
