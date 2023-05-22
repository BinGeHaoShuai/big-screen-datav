<template>
  <div>
    <div class="center">
      <left-content />
      <center-map />
      <right-content />
    </div>
    <div class="bottom">
      <bottom />
    </div>
  </div>
</template>

<script>
import bottom from './component/bottom.vue';
import centerMap from "./component/centerMap.vue";
import leftContent from "./component/leftContent.vue";
import rightContent from "./component/rightContent.vue";
export default {
  components: { centerMap, leftContent, rightContent,bottom },
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
