
<template>
  <div :class="[VpCarousel.card ? 'vp-carousel-card-item' :'vp-carousel-item']" :style="{ height: VpCarousel.height + 'px' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VpCarouselItem",
  inject: ["VpCarousel"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    let slots = this.VpCarousel.$slots.default;
  },
};
</script>
<style scoped>
.vp-carousel-item {
  position: absolute;
  display: inline-block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  /* transition: all 1s; */
}

.vp-carousel-card-item {
  position: absolute;
  display: inline-block;
  width: 50%;
  height: 100%;
  top: 0;
  left: 25%;
  /* transform: translate(25%); */
  z-index: 1;
}
</style>