<template>
  <div class="content">
    <div>
      <dv-border-box-8 :reverse="true">
        <div class="head">
          <div class="head_content">
            <h1>25</h1>
            <h2>温度(℃)</h2>
          </div>
          <div class="head_content">
            <h1>40</h1>
            <h2>湿度(%rh)</h2>
          </div>
          <div class="head_content">
            <h1>65</h1>
            <h2>噪声(dB)</h2>
          </div>
        </div>
      </dv-border-box-8>
    </div>

    <div class="body">
      <!-- 温度监测表 -->
      <dv-border-box-6
        ><Echart :options="options1" height="400px"
      /></dv-border-box-6>
      <!-- 城市噪音监测表与城市湿度 -->
      <div class="body_table1">
        <div>
          <dv-border-box-2 style="padding: 10px">
            <h2>噪音监测</h2>
            <dv-capsule-chart
              :config="noiseData"
              style="width: 370px; height: 380px"
            />
          </dv-border-box-2>
        </div>
        <div>
          <dv-border-box-2 style="padding: 10px">
            <h2>湿度</h2>
            <Echart :options="options2" height="380px" width="300px" />
          </dv-border-box-2>
        </div>
      </div>
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
        color: ["#005fa2"],
        title: {
          text: "24小时温度监测",
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
            data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
          },
        ],
        yAxis: [
          {
            name: "摄氏度",
            type: "value",
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
                  color: "rgb(35, 67, 234)",
                },
                {
                  offset: 1,
                  color: "rgb(121, 185, 235)",
                },
              ]),
            },
            emphasis: {
              focus: "series",
            },
            data: [14, 14, 14, 14, 18, 20, 21, 20, 19, 18, 16, 15],
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
      noiseData: {
        data: [
          {
            name: "万州",
            value: 167,
          },
          {
            name: "渝北",
            value: 67,
          },
          {
            name: "巴南",
            value: 123,
          },
          {
            name: "渝中",
            value: 55,
          },
          {
            name: "合川",
            value: 98,
          },
          {
            name: "黔江",
            value: 57,
          },
          {
            name: "合川",
            value: 98,
          },
          {
            name: "黔江",
            value: 57,
          },
          {
            name: "合川",
            value: 98,
          },
          {
            name: "黔江",
            value: 57,
          },
        ],
      },
      options2: {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            detail: {
              formatter: "{value}",
            },
            data: [
              {
                value: 50,
                name: "%rh",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.content {
  width: 38%;
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
