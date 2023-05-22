<template>
  <div class="content">
    <div>
      <dv-border-box-8 :reverse="true">
        <div class="head">
          <div class="head_content">
            <h1>35</h1>
            <h2>PM2.5(μg/m³)</h2>
          </div>
          <div class="head_content">
            <h1>75</h1>
            <h2>PM10(mg/m³)</h2>
          </div>
          <div class="head_content">
            <h1>125</h1>
            <h2>TSP(mg/m³)</h2>
          </div>
        </div>
      </dv-border-box-8>
    </div>

    <div class="body">
      <!-- 城市空气污染物比例占比 -->
      <div class="body_table1">
        <dv-border-box-6 style="padding: 10px">
          <h2>主要污染物分布</h2>
          <Echart
            :options="options1"
            height="400px"
            width="400px"
            style="margin: auto"
          />
        </dv-border-box-6>
      </div>
      <!-- 城市空气污染物监测 -->
      <div>
        <dv-border-box-6 style="padding: 10px">
          <h2>空气污染物监测</h2>
          <Echart :options="options2" height="340px" width="500px" />
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
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 180],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 15, name: "SO2" },
              { value: 50, name: "PM2.5" },
              { value: 80, name: "PM10" },
              { value: 60, name: "NO2" },
              { value: 106, name: "O3" },
              { value: 90, name: "CO" },
            ],
          },
        ],
      },
      options2: {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["PM2.5", "PM10", "SO2", "NO2", "O3"],
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
          data: ["1月", "3月", "5月", "7月", "9月", "11月"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "PM2.5",
            type: "line",
            data: [41, 60, 43, 46, 70, 50],
            smooth: true,
          },
          {
            name: "PM10",
            type: "line",
            data: [71, 78, 90, 70, 76, 80],
            smooth: true,
          },
          {
            name: "SO2",
            type: "line",
            data: [15, 23, 20, 15, 19, 10],
            smooth: true,
          },
          {
            name: "NO2",
            type: "line",
            data: [103, 90, 60, 70, 40, 35],
            smooth: true,
          },
          {
            name: "O3",
            type: "line",
            data: [60, 70, 85, 105, 120, 80],
            smooth: true,
          },
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
.body_table1 {
  display: flex;
}
</style>
