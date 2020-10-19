<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft2Chart"
      height="4.625rem"
      width="4.125rem"
    ></Echart>
  </div>
</template>

<script>
import Echart from '@/common/echart'
export default {
  data () {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({})
    },
  },
  watch: {
    cdata: {
      handler (newData) {
        this.options = {
          angleAxis: {
            interval: 1,
            type: "category",
            data: newData.angleAxisData,
            z: 10,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
              }
            },
            axisLabel: {
              interval: 0,
              show: true,
              color: "#00c7ff",
              margin: 8,
              fontSize: 12
            }
          },
          radiusAxis: {
           min: 0,
            max: 100,
            interval: 20,
            axisLine: {
              show: true,
              lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
              }
            },
            axisLabel: {
              formatter: "{value} %",
              show: false,
              padding: [0, 0, 20, 0],
              color: "#00c7ff",
              fontSize: 16
            },
            splitLine: {
              lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
              }
            }
          },
          legend: {
            show: true,
            orient: "vartical",
            top: "center",
            bottom: "0%",
            itemWidth: 16,
            itemHeight: 8,
            itemGap: 16,
            textStyle: {
              color: "#A3E2F4",
              fontSize: 12,
              fontWeight: 0
            },
          },
          polar: {},
          series: [
            {
              name: "A",
              type: "bar",
              radius: ["20%", "100%"],
              data: newData.seriesData,
              coordinateSystem: "polar"
            }
          ]
        };
      },
      immediate: true,
      deep: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>