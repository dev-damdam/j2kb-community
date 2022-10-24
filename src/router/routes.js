import HomeView from "../views/home/HomeView.vue";
import LoginView from "../views/member/LoginView.vue";
import RegisterView from "../views/member/RegisterView.vue";
import PostBoardView from "../views/board/BoardView.vue";
import UpdateProfileView from "../views/member/UpdateProfileView.vue";
import WritePostView from "../views/home/post/WritePostView.vue";
import ViewMyPostView from "../views/home/post/ViewMyPostView.vue";
import PostDetailView from "../views/home/post/PostDetailView.vue";
import ViewMyCommentView from "../views/home/post/ViewMyCommentView.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,

    children: [
      {
        path: "post-board",
        name: "post-board",
        component: PostBoardView,
      },
      {
        path: "update-prifle",
        name: "update-profile",
        component: UpdateProfileView,
      },
      {
        path: "write-post",
        name: "write-post",
        component: WritePostView,
      },
      {
        path: "view-my-post/:nickname",
        name: "view-my-post",
        component: ViewMyPostView,
        params: true,
      },
      {
        path: "view-post-detail/:pid",
        name: "view-post-detail",
        component: PostDetailView,
        params: true,
      },
      {
        path: "view-my-comment/:nickname",
        name: "view-my-comment",
        component: ViewMyCommentView,
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
