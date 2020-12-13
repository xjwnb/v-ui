<template>
  <ul :class="[`vp-menu-${mode}`]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "VpMenu",
  props: {
    mode: {
      type: String,
      default: "horizontal" // vertical | horizontal
    }
  },
  provide() {
    return {
      VpMenu: this
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
/* 水平 */
.vp-menu-horizontal {
  width: 100%;
  height: 60px;
  background-color: #545C64;
  list-style: none;
  display: flex;
  line-height: 60px;
  color: #ffffff;
  margin: 0;
  padding: 0 20px;
}
/* 垂直 */
.vp-menu-vertical {
  width: 240px;
  height: 100%;
  background-color: #545C64;
  list-style: none;
  line-height: 60px;
  color: #ffffff;
  margin: 0;
  padding: 0;
}
</style>