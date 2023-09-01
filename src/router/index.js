import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignIn from "../views/SignIn.vue";
import signUp from "../components/form/SignUp";
import ForgetPassword from "../components/form/ForgetPassword";
import SendCode from "../components/form/SendCode";
import ResetPassword from "../components/form/ResetPassword";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "signup",
    component: signUp,
  },
  {
    path: "/forgetpassword",
    name: "forgetpassword",
    component: ForgetPassword,
  },
  {
    path: "/forgetpassword/SendCode",
    name: "SendCode",
    component: SendCode,
  },
  {
    path: "/forgetpassword/SendCode/resetpassword",
    name: "resetpassword",
    component: ResetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
