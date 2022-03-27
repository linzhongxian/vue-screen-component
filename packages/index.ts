import type { App } from "vue";

/* 基础组件 start */
import HayChart from "./Chart"; // 图表
// import HayVideo from "./Video"; // 视频
/* 基础组件 end */

// 所有组件
const components: any[] = [
  HayChart,
  // HayVideo,
];

/**
 * 组件注册
 * @param {App} app Vue 对象
 * @returns {Void}
 */
const install = (app: App) => {
  // 注册组件
  components.forEach(component => app.component(component.name, component));
};

export {
  HayChart,
  // HayVideo,
};

// 全部导出
export default {
  install,
  ...components,
};
