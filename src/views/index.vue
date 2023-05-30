<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <!-- 头部样子 -->
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text">智慧城市大屏可视化</span>
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 导航栏 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div
              class="react-left ml-4 react-l-s"
              :class="{ bgc: tabbarIndex == 0 }"
            >
              <span
                class="react-left"
                :class="{ bgc: tabbarIndex == 0 }"
              ></span>
              <router-link to="/traffic"
                ><span class="text" @click="changeTabbarIndex(0)"
                  >交通情况</span
                ></router-link
              >
            </div>
            <div class="react-left ml-3" :class="{ bgc: tabbarIndex == 1 }">
              <router-link to="/population"
                ><span class="text" @click="changeTabbarIndex(1)"
                  >城市人口</span
                ></router-link
              >
            </div>
            <div class="react-left ml-3" :class="{ bgc: tabbarIndex == 2 }">
              <router-link to="/environment"
                ><span class="text" @click="changeTabbarIndex(2)"
                  >环境生态</span
                ></router-link
              >
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right mr-3" :class="{ bgc: tabbarIndex == 3 }">
              <router-link to="/economy"
                ><span class="text fw-b" @click="changeTabbarIndex(3)"
                  >城市经济</span
                ></router-link
              >
            </div>
            <div class="react-right mr-4 react-l-s">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>
        <!-- 数据内容 -->
        <div class="body-box">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "../utils/drawMixin";
import { formatTime } from "../utils/index.js";

export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      decorationColor: ["#568aea", "#000000"],
      tabbarIndex: 0,
    };
  },
  components: {},
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
    changeTabbarIndex(index) {
      this.tabbarIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/index.scss";
.mr-3 {
  background-color: #0f1325;
}
.bgc {
  background-color: #1a5cd7 !important;
}
.text {
  color: #fff;
}
</style>
