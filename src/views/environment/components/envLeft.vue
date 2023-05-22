<template>
  <div class="content">
    <div>
      <dv-border-box-8 :reverse="true">
        <div class="head">
          <div class="head_content">
            <h1>2.5</h1>
            <h2>风力(级)</h2>
          </div>
          <div class="head_content">
            <h1>5</h1>
            <h2>风速(m/s)</h2>
          </div>
          <div class="head_content">
            <h1>45</h1>
            <h2>光照(klm)</h2>
          </div>
        </div>
      </dv-border-box-8>
    </div>

    <div class="body">
      <!-- 风速监测表 -->
      <dv-border-box-6
        ><Echart :options="options1" height="500px"
      /></dv-border-box-6>
      <!-- 城市空气污染物监测表 -->
      <dv-border-box-10>
        <div style="padding: 5px">
          <dv-scroll-board :config="airData" style="height: 300px" />
        </div>
      </dv-border-box-10>
    </div>
  </div>
</template>

<script>
import Echart from "@/common/echart/index.vue";
import * as echarts from "echarts";
export default {
  components: { Echart },
  data() {
    return {
      options1: {
        color: ["#80FFA5"],
        title: {
          text: "24小时风速监测",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["air spend"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            name: "h",
            type: "category",
            boundaryGap: false,
            data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          },
        ],
        yAxis: [
          {
            name: "风速m/s",
            type: "value",
            min: 0,
            max: 6,
          },
        ],
        series: [
          {
            type: "line",
            stack: "Total",
            smooth: true,
            lineStyle: {
              width: 0,
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgb(128, 255, 165)",
                },
                {
                  offset: 1,
                  color: "rgb(1, 191, 236)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [
              1, 1.3, 1.1, 0.8, 2.4, 3.5, 3.1, 1.2, 2.5, 4.2, 3.2, 1.5, 0.9,
            ],
          },
        ],
      },
      airData: {
        header: ["城市", "首要污染物", "等级", "AQI"],
        data: [
          ["渝北区", "——", "优", 34],
          ["万州区", "——", "优", 31],
          ["巴南区", "O3", "轻度污染", 94],
          ["江北区", "PM2.5", "良", 52],
          ["渝北区", "——", "优", 34],
          ["万州区", "——", "优", 31],
          ["巴南区", "O3", "轻度污染", 94],
          ["江北区", "PM2.5", "良", 52],
        ],
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
</style>
