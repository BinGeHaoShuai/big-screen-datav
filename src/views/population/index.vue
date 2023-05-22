<template>
  <div>
    <div class="center">
      <center-left />
      <center-map />
      <center-right />
    </div>
    <div class="bottom"></div>
  </div>
</template>

<script>
import centerLeft from "./components/centerLeft.vue";
import centerRight from "./components/centerRight.vue";
import centerMap from "./components/centerMap.vue";
export default {
  components: { centerMap, centerLeft, centerRight },
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;

  justify-content: space-between;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
}
</style>
