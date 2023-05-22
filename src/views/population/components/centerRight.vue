<template>
  <div class="content">
    <dv-border-box-6 style="padding-top: 20px">
      <h2 class="title">重庆市城镇化率</h2>
      <Echart :options="options1" height="400px" width="600px"
    /></dv-border-box-6>

    <dv-border-box-8 :reverse="true" style="padding-top: 20px">
      <h2 class="title">重庆市年龄结构</h2>
      <Echart :options="options2" height="350px" width="600px" />
    </dv-border-box-8>
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
        },
        legend: {
          data: ["重庆市", "全国"],
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
          name: "单位：%",
          min: 45,
          max: 75,
          interval: 5,
        },
        series: [
          {
            name: "重庆市",
            type: "line",
            data: [60, 64, 66, 68, 70, 72, 73, 74],
          },
          {
            name: "全国",
            type: "line",
            data: [55, 58, 60, 63, 66, 68, 69, 70],
          },
        ],
      },
      options2: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: ["男生", "女生", "65岁及以上", "15-64岁", "0-14岁"],
        },
        series: [
          {
            name: "男女比例",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1548, name: "男生" },
              { value: 1400, name: "女生" },
            ],
          },
          {
            name: "年龄比例",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{per|{d}%}  ",
              backgroundColor: "#F6F8FC",
              borderColor: "#8C8D8E",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 1048, name: "15-64岁" },
              { value: 335, name: "65岁及以上" },
              { value: 310, name: "0-14岁" },
            ],
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

<style scoped>
.title {
  display: flex;
  justify-content: center;
  margin: 20px;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
}
</style>
