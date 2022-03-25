import type { Ref } from "vue";
import { defineComponent, ref } from "vue";
import "./style/common.scss";
import { HayChart } from "hay-ui";
import { getOption1 as getOption } from "./config/chart/pie";

const demoList = [
  { name: "数字城管", value: 14 },
  { name: "市民热线", value: 12 },
  { name: "巡查员上报", value: 9 },
  { name: "日常巡检", value: 22 },
  { name: "其他", value: 25 },
];

export default defineComponent({
  setup() {
    const option: Ref = ref(getOption(demoList));

    return { option };
  },
  render() {
    return <div>
      <HayChart type={"pie_ring_shadow"} dataList={demoList} width={600} height={300} />
    </div>;
  },
});
