import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import InputPage from "./pages/InputPage.vue";
import UsuarioPage from "./pages/UsuarioPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/usuario",
    component: UsuarioPage,
  },
  {
    path: "/input",
    component: InputPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
