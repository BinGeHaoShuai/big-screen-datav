<template>
  <div class="content">
    <div>
      <dv-border-box-8 :reverse="true" style="padding: 10px">
        <div>
          <Echart :options="options1" height="400px" />
        </div>
      </dv-border-box-8>
    </div>

    <div class="body">
      <!-- 城市农作物比例占比 -->
      <div class="body_table1">
        <dv-border-box-6 style="padding: 10px">
          <h2>主要农作物物分布</h2>
          <Echart
            :options="options2"
            height="400px"
            width="400px"
            style="margin: auto"
          />
        </dv-border-box-6>
      </div>
    </div>
  </div>
</template>

<script>
import Echart from "@/common/echart/index.vue";
export default {
  components: { Echart },
  data() {
    return {
      options1: {
        title: {
          text: "重庆市财务开销",
        },
        legend: {
          data: ["预算分配", "实际开销"],
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "管理", max: 6500 },
            { name: "销售", max: 16000 },
            { name: "市场", max: 30000 },
            { name: "研发", max: 38000 },
            { name: "客服", max: 52000 },
            { name: "信息技术", max: 25000 },
          ],
        },
        series: [
          {
            name: "预算分配 vs 实际开销",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "实际开销",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "预算分配",
              },
            ],
          },
        ],
      },
      options2: {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["product", "小麦", "玉米", "高粱"],
          source: [
            { product: "2019", 小麦: 433, 玉米: 858, 高粱: 937 },
            { product: "2020", 小麦: 831, 玉米: 734, 高粱: 551 },
            { product: "2021", 小麦: 864, 玉米: 652, 高粱: 825 },
            { product: "2023", 小麦: 724, 玉米: 539, 高粱: 391 },
          ],
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
      },
    };
  },
};
</script>

<style scoped>
.content {
  width: 30%;
}
.head {
  padding: 10px;
  height: 80px;
  display: flex;
  justify-content: space-around;
}
.head_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.body {
  margin-top: 10px;
}
.body_table1 {
  display: flex;
}
</style>
