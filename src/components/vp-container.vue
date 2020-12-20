<template>
  <div :class="['vp-container', flexClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vpContainer",
  data() {
    return {};
  },
  computed: {
    flexClass() {
      let slots = this.$slots.default;
      let slotsLength = this.$slots.default.length;
      let hasAside = slots.some(item => {
        // return item.componentOptions.tag === "vp-aside";
        if (item.componentOptions) {
          return item.componentOptions.tag === "vp-aside";
        }
      })
      return hasAside ? "vp-container-flex" : "";
    },
  },
  created() {},
  mounted() {
  },
};
</script>
<style scoped>
.vp-container {
  width: 100%;
  height: 100%;
}
.vp-container-flex {
  display: flex;
}
</style>