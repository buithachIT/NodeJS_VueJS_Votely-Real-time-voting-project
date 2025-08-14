import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import FontDemo from '@/components/ui/FontDemo.vue'
import { createWebHashHistory, createRouter } from 'vue-router'
import AuthLayout from '@/layouts/authLayout.vue'
import DefaultLayout from '@/layouts/defaultLayout.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: HomeView,
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      { path: 'login', name: 'Login', component: LoginView },
      { path: 'register', name: 'Register', component: RegisterView },
    ],
  },
  {
    path: '/fonts',
    name: 'FontDemo',
    component: FontDemo,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
