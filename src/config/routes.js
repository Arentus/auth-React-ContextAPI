import { Home } from "../pages/home/Home";
import { SignIn } from "../pages/signIn/SignIn";
import { SignUp } from "../pages/signUp/SignUp";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];

export default routes;
