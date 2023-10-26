import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// 静态路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/index",
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index/index.vue"),
    meta: { hidden: true },
  },
  {
    path: "/bus",
    name: "bus",
    component: () => import("@/views/bus/index.vue"),
    meta: { hidden: true },
  },
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * 重置路由
 */
export function resetRouter() {
  router.replace({ path: "/index" });
}
export default router;
