import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/member/LoginView.vue";
import RegisterView from "../views/member/RegisterView.vue";
import PostBoardView from "../views/board/BoardView.vue";
import WritePostView from "../views/home/post/WritePostView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,

    children: [
      {
        path: "/",
        name: "post-board",
        component: PostBoardView,
      },
      {
        path: "write-post",
        name: "write-post",
        component: WritePostView,
      },
    ],
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
