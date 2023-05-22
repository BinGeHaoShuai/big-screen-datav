<template>
  <div>
    <dv-border-box-6 style="padding-top: 20px">
      <h2 class="title">2010-2022年重庆市常住人口及增量</h2>
      <Echart :options="options1" height="500px" width="600px" />
      <h2 class="title">2015-2022年重庆市人口出生率、死亡率和自然增长率</h2>
      <Echart :options="options2" height="350px" width="600px" />
    </dv-border-box-6>
  </div>
</template>

<script>
import Echart from "@/common/echart/index.vue";
export default {
  data() {
    return {
      options1: {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        legend: {
          data: ["人口", "人口增长率"],
        },
        xAxis: [
          {
            type: "category",
            data: [
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022",
            ],
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "万人",
            min: 2700,
            max: 3300,
            interval: 100,
            axisLabel: {
              formatter: "{value}",
            },
          },
          {
            type: "value",
            name: "万人",
            min: 0,
            max: 70,
            interval: 10,
            axisLabel: {
              formatter: "{value}",
            },
          },
        ],
        series: [
          {
            name: "人口",
            type: "bar",
            tooltip: {
              valueFormatter: function (value) {
                return value + " 万";
              },
            },
            data: [
              2920, 2950, 2970, 3010, 3040, 3070, 3110, 3150, 3160, 3190, 3210,
              3220, 3250,
            ],
          },
          {
            name: "人口增长率",
            type: "line",
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + " 万人";
              },
            },
            data: [
              40.21, 59.81, 30.45, 36.15, 32.45, 26.54, 39.94, 33.55, 19.63,
              24.7, 21.09, 3.5, 4.21,
            ],
          },
        ],
      },
      options2: {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["出生率", "死亡率", "自然增长率"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
          ],
        },
        yAxis: {
          type: "value",
          min: -4,
          max: 14,
          interval: 2,
        },
        series: [
          {
            name: "出生率",
            type: "line",
            data: [10.8, 11.9, 11.6, 11.5, 10.5, 7.8, 6.5, 6.0],
          },
          {
            name: "死亡率",
            type: "line",
            data: [7.3, 7.3, 7.4, 7.8, 7.9, 7.9, 8.1, 8.2],
          },
          {
            name: "自然增长率",
            type: "line",
            data: [4, 4.4, 4, 3.8, 3.1, -1, -1.6, -2],
          },
        ],
      },
    };
  },
  components: {
    Echart,
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
