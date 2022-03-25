import type { Ref } from "vue";
import type { EChartOption, EChartsType } from "echarts";
import type { ChartType, PieDataType } from "./types";
import * as echarts from "echarts";
import { computed, ref } from "vue";
import { extend } from "../../shared";
import { getConfigByType } from "./common";

/**
 * 图表的大小
 * @param w 宽
 * @param h 高
 * @returns
 */
export const useChartSize = (w: number, h: number) => {
  const width = ref(w);
  const height = ref(h);

  const style = computed(() => {
    let str = "";
    width.value && (str += `width: ${width.value}px;`);
    height.value && (str += `height: ${height.value}px;`);
    return str;
  });

  return {
    style: style.value,
  };
};

/**
 * echart相关操作
 * @returns
 */
export const useChart = () => {
  let instance: EChartsType | null = null;

  /**
   * 清理图表
   */
  const clearChart = () => {
    instance && instance.dispose();
    instance = null;
  };

  /**
   * 渲染图表
   * @param ref ref节点
   * @param options echart配置
   */
  const renderChart = (ref: Ref, options: EChartOption) => {
    if (instance) clearChart();
    instance = echarts.init(ref.value);
    instance.setOption(options);
  };

  return {
    clearChart,
    renderChart,
  };
};

/**
 * options相关操作
 * @returns
 */
export const useOptions = () => {
  const options = ref({});

  const setOptions = (op: EChartOption = {}) => {
    options.value = op;
  };

  const extendOptions = (op: EChartOption = {}) => {
    options.value = extend({}, options.value, op);
  };

  const setTypeOptions = (type: ChartType, dataList: PieDataType[]) => {
    const typeOptions = getConfigByType(type, dataList);
    options.value = extend({}, options.value, typeOptions);
  };

  return {
    options,
    setOptions,
    extendOptions,
    setTypeOptions,
  };
};
