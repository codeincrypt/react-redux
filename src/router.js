import Login from "./view/auth/Login";
import PostList from "./view/page/PostList";
import UserProfile from "./view/page/UserProfile";
import ViewPost from "./view/page/ViewPost";

export const RouterList = [
  {
    path: "/post",
    component: PostList,
    exact: true,
  },
  
  {
    path: "/",
    component: PostList,
    exact: true,
  },
  
  {
    path: "/post:id",
    component: ViewPost,
    exact: true,
  },
  {
    path: "/profile",
    component: UserProfile,
    exact: true,
  },
];

export const AuthRouterList = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
];
