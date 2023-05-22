<template>
  <div>
    <div style="display: flex; justify-content: space-between; width: 100vw">
      <div style="display: flex">
        <div class="colum_center">
          <h2>本市汽车总数</h2>
          <div>
            <dv-active-ring-chart
              :config="carsNum"
              style="width: 300px; height: 300px"
            />
          </div>
        </div>
        <div class="colum_center">
          <h2>交通事故数量</h2>
          <div>
            <dv-active-ring-chart
              :config="accidentNum"
              style="width: 300px; height: 300px"
            />
          </div>
        </div>
        <div class="colum_center">
          <h2>今日处理事故数</h2>
          <div>
            <dv-active-ring-chart
              :config="accidentNum2"
              style="width: 300px; height: 300px"
            />
          </div>
        </div>
      </div>
      <dv-border-box-6  style="padding: 20px">
        <div class="colum_center">
          <h2>各地区交通拥堵指数</h2>
          <dv-scroll-ranking-board
            :config="jam"
            style="width: 600px; height: 250px"
          />
        </div>
      </dv-border-box-6>

      <div class="colum_center">
        <dv-border-box-12 style="padding: 20px; margin-left: 150px">
          <div class="air">
            <h1>今日天气</h1>
            <p>当前天气晴朗，24°C。</p>
            <p>今天日间预计有大雨。 最高气温25°。</p>
          </div>
        </dv-border-box-12>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carsNum: {
        radius: "40%",
        activeRadius: "45%",
        data: [
          {
            name: "重庆市",
            value: 320015,
          },
        ],
        digitalFlopStyle: {
          fontSize: 20,
        },
        showOriginValue: true,
      },
      accidentNum: {
        radius: "40%",
        activeRadius: "45%",
        data: [
          {
            name: "重庆市",
            value: 130,
          },
        ],
        digitalFlopStyle: {
          fontSize: 20,
        },
        showOriginValue: true,
      },
      accidentNum2: {
        radius: "40%",
        activeRadius: "45%",
        data: [
          {
            name: "重庆市",
            value: 23,
          },
        ],
        digitalFlopStyle: {
          fontSize: 20,
        },
        showOriginValue: true,
      },
      jam: {
        data: [
          {
            name: "渝北区",
            value: 55,
          },
          {
            name: "巴南区",
            value: 120,
          },
          {
            name: "云阳县",
            value: 78,
          },
          {
            name: "万州区",
            value: 66,
          },
          {
            name: "江北区",
            value: 80,
          },
          {
            name: "合川区",
            value: 45,
          },
          {
            name: "黔江区",
            value: 29,
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.colum_center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.air {
  display: flex;
  height: 30vh;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  p {
    font-size: 30px;
    line-height: 40px;
  }
}
</style>
