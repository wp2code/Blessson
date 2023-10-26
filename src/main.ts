import { createApp } from "vue";
import { setupStore } from "@/stores";
import App from "./App.vue";
import router from "@/router";
import Particles from "particles.vue3";
// 本地SVG图标
import "virtual:svg-icons-register";
// 样式
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";
import "uno.css";
import "@/permission";
const app = createApp(App);
// 国际化
// import i18n from "@/lang/index";
// 全局注册 状态管理(store)
setupStore(app);
app.use(Particles);
app.use(router).mount("#app");
