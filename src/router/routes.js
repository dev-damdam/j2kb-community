import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/member/LoginView.vue";
import RegisterView from "../views/member/RegisterView.vue";
import PostListView from "../views/post/PostListView.vue";

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
  {
    path: "/post-list",
    name: "post-list",
    component: PostListView,
  },
];

export default routes;
