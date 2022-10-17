import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/member/LoginView.vue";
import RegisterView from "../views/member/RegisterView.vue";
import PostBoardView from "../views/board/BoardView.vue";
import WritePostView from "../views/home/post/WritePostView.vue";
import ViewMyPostView from "../views/home/post/ViewMyPostView.vue";
import PostDetailView from "../views/home/post/PostDetailView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,

    children: [
      {
        path: "/",
        name: "post-board/:nickname",
        component: PostBoardView,
        params: true,
      },
      {
        path: "write-post/:nickname",
        name: "write-post",
        component: WritePostView,
        params: true,
      },
      {
        path: "view-my-post/:nickname",
        name: "view-my-post",
        component: ViewMyPostView,
        params: true,
      },
      {
        path: "view-post-detail/:id",
        name: "view-post-detail",
        component: PostDetailView,
        params: true,
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
