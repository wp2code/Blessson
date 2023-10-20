import "./assets/main.css";

import { createApp } from "vue";
import { setupStore } from "@/stores";
import App from "./App.vue";
import router from "./router";
// 本地SVG图标
import "virtual:svg-icons-register";

// 样式
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.scss";
import "uno.css";

// const store = createPinia();
const app = createApp(App);
// 国际化
import i18n from "@/lang/index";
// 全局注册 状态管理(store)
setupStore(app);
app.use(router);
app.use(i18n);
app.mount("#app");
