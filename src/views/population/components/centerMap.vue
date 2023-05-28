<template>
  <div class="content">
    <heat-map-echarts height="580px" width="680px" />
    <div>
      <dv-border-box-7>
        <h2 class="title">人口排名前五的地区</h2>
        <Echart :options="options1" height="350px" width="680px" />
      </dv-border-box-7>
    </div>
  </div>
</template>

<script>
import Echart from "@/common/echart/index.vue";
import heatMapEcharts from "./echarts/heatMapEcharts.vue";
export default {
  data() {
    return {
      options1: {
        xAxis: {
          type: "value",
          max: "dataMax",
        },
        yAxis: {
          type: "category",
          data: ["万州区", "黔江区", "涪陵区", "渝中区", "江北区", "渝北区"],
          inverse: true,
          animationDuration: 300,
          animationDurationUpdate: 300,
          max: 4, // only the largest 3 bars will be displayed
        },
        series: [
          {
            realtimeSort: true,
            // name: '人口数',
            type: "bar",
            // data: [156, 48, 111, 58, 92, 219],
            data: ["156", "48", "111", "58", "92", "219"],
            label: {
              show: true,
              position: "right",
              valueAnimation: true,
            },
          },
        ],
        legend: {
          show: true,
        },
        animationDuration: 1000,
        animationDurationUpdate: 1000,
        animationEasing: "linear",
        animationEasingUpdate: "linear",
      },
    };
  },
  components: {
    Echart,
    heatMapEcharts,
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-top: 20px;
  margin-bottom: -30px;
}
</style>
