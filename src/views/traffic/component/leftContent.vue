<template>
  <div>
    <dv-border-box-1 style="padding: 5px"
      >
      <h2 style="margin: 20px">各地区交通事故数量</h2>
      <dv-capsule-chart :config="config" style="width: 400px; height: 500px"
    /></dv-border-box-1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        data: [
          {
            name: "渝北区",
            value: 167,
          },
          {
            name: "巴南区",
            value: 67,
          },
          {
            name: "万州区",
            value: 123,
          },
          {
            name: "合川区",
            value: 55,
          },
          {
            name: "江北区",
            value: 98,
          },
          {
            name: "黔江区",
            value: 55,
          },
          {
            name: "渝中区",
            value: 85,
          },
        ],
      },
    };
  },
};
</script>

<style></style>
