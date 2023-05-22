<template>
  <div>
    <div class="env_content">
      <env-left />
      <env-center />
      <env-right />
    </div>
  </div>
</template>

<script>
import envLeft from "./components/envLeft.vue";
import envRight from "./components/envRight.vue";
import envCenter from "./components/envCenter.vue";
export default {
  components: { envLeft, envCenter, envRight },
};
</script>

<style scoped>
.env_content {
  display: flex;
  justify-content: space-between;
}
</style>
