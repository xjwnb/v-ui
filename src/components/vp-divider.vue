
<template>
  <div :class="['vp-divider', `vp-divider-${direction}`]" :style="{'backgroundColor': color}">
    <div v-if="$slots.default" :class="[`vp-divider-text-${contentPosition}`]"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "VpDivider",
  props: {
    color: {
      type: String,
      default: "#dcdfe6"
    },
    direction: {
      type: String,
      default: "horizontal" // "horizontal" | "vertical"
    },
    contentPosition: {
      type: String,
      default: "center"
    }
  },
  data() {
    return {

    }
  },
  created() {

  },
  mounted() {

  }
}
</script>
<style scoped>
.vp-divider {
  position: relative;
}
.vp-divider-horizontal {
  width: 100%;
  height: 1px;
  margin: 25px 0;
  display: block;
}
.vp-divider-vertical {
  height: 1em;
  width: 1px;
  margin: 0 25px;
  display: inline-block;
}
.vp-divider-text-center {
  position: absolute;
  font-weight: 500;
  font-size: 14px;
  padding: 0 20px;
  background-color: #ffffff;
  top: -7px;
  left: 50%;
  transform: translateX(-50%);
}
.vp-divider-text-left {
  position: absolute;
  font-weight: 500;
  font-size: 14px;
  padding: 0 20px;
  background-color: #ffffff;
  top: -7px;
  left: 20px;
  /* transform: translateX(50%); */
}
.vp-divider-text-right {
  position: absolute;
  font-weight: 500;
  font-size: 14px;
  padding: 0 20px;
  background-color: #ffffff;
  top: -7px;
  right: 20px;
  /* transform: translateX(-50%); */
}
</style>