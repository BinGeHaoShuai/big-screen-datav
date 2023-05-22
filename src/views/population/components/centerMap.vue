<template>
  <div class="content">
    <!-- <Echart :options="options" height="580px" width="580px" /> -->
    <heat-map-echarts height="580px" width="680px" />
    <div>
      <dv-border-box-7>
        <h2 class="title">人口排名前五的地区</h2>
        <Echart :options="options2" height="350px" width="680px" />
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
        title: {
          text: "重庆市 （2023）",
          subtext: "Data from Web",
          sublink:
            "http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}<br/>{c} (p / km2)",
        },
        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },
        },
        visualMap: {
          min: 800,
          max: 50000,
          text: ["High", "Low"],
          realtime: false,
          calculable: true,
          inRange: {
            color: ["lightskyblue", "yellow", "orangered"],
          },
        },
        series: [
          {
            name: "香港18区人口密度",
            type: "map",
            map: "HK",
            label: {
              show: true,
            },
            data: [
              { name: "渝北区", value: 20057.34 },
              { name: "湾仔", value: 15477.48 },
              { name: "东区", value: 31686.1 },
              { name: "南区", value: 6992.6 },
              { name: "油尖旺", value: 44045.49 },
              { name: "深水埗", value: 40689.64 },
              { name: "九龙城", value: 37659.78 },
              { name: "黄大仙", value: 45180.97 },
              { name: "观塘", value: 55204.26 },
              { name: "葵青", value: 21900.9 },
              { name: "荃湾", value: 4918.26 },
              { name: "屯门", value: 5881.84 },
              { name: "元朗", value: 4178.01 },
              { name: "北区", value: 2227.92 },
              { name: "大埔", value: 2180.98 },
              { name: "沙田", value: 9172.94 },
              { name: "西贡", value: 3368 },
              { name: "离岛", value: 806.98 },
            ],
            // 自定义名称映射
            nameMap: {},
          },
        ],
      },
      options2: {
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
