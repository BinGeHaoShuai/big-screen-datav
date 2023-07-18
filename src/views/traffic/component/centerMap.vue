<template>
  <div class="content">
    <baidu-map
      class="map"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      :mapStyle="mapStyle"
      :scroll-wheel-zoom="true"
    >
      <bm-marker
        v-for="(item, index) of markerPoints"
        :position="item"
        :key="index"
      ></bm-marker>
    </baidu-map>
  </div>
</template>

<script>
import mapStyle from "@/assets/mapStyle.json";
export default {
  components: {},
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3,
      mapStyle: {
        styleJson: mapStyle,
      },
      markerPoints: [
        { lng: 106.505, lat: 29.5332 },
        { lng: 106.51, lat: 29.5332 },
        { lng: 106.524, lat: 29.53 },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    handler({ BMap, map }) {
      console.log(BMap, map);
      this.center.lng = 106.505;
      this.center.lat = 29.5332;
      this.zoom = 15;
    },
  },
};
</script>

<style scoped>
.content {
  width: 52%;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.map {
  width: 100%;
  height: 100%;
}
</style>
