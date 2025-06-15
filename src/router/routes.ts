import type { RouteRecordRaw } from "vue-router";
import { LAYOUT_DEFAULT_KEY } from "@/common";
import { PATH } from "./path";

const HomeIndex = () => import("@/pages/home/HomeIndex.vue");
const UserIndex = () => import("@/pages/users/index/UserIndex.vue");
const NotFound = () => import("@/pages/errors/NotFound.vue");

export const routes: RouteRecordRaw[] = [
  {
    path: PATH.HOME,
    component: HomeIndex,
    name: "home.index",
    meta: {
      layout: LAYOUT_DEFAULT_KEY,
      title: "home",
      menu: false,
    },
  },
  {
    path: PATH.USERS,
    component: UserIndex,
    name: "users.index",
    meta: {
      layout: LAYOUT_DEFAULT_KEY,
      title: "users",
      menu: true,
    },
  },
  {
    path: PATH.NOT_FOUND,
    component: NotFound,
    name: "errors.notFound",
    meta: {
      layout: LAYOUT_DEFAULT_KEY,
      title: "notFound",
      menu: false,
    },
  },
];
