<template>
  <div>
    <div class="env_content">
      <eco-left />
      <eco-center />
      <eco-right />
    </div>
  </div>
</template>

<script>
import ecoLeft from "./components/ecoLeft.vue";
import ecoRight from "./components/ecoRight.vue";
import ecoCenter from "./components/ecoCenter.vue";
export default {
  components: { ecoLeft, ecoCenter, ecoRight },
};
</script>

<style scoped>
.env_content {
  display: flex;
  justify-content: space-between;
}
</style>
