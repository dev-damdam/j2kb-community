import HomeView from "../views/HomeView.vue";
import LoginView from "../views/member/LoginView.vue";
import RegisterView from "../views/member/RegisterView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
];

export default routes;
