import type { App } from "vue";
import { createPinia } from "pinia";

const store = createPinia();

// 全局注册 store
export function setupStore(app: App<Element>) {
  console.log("createPinia", store);
  app.use(store);
}

export { store };
