<template>
  <ul :class="[`vp-menu-${mode}`]"
    :style="{backgroundColor: backgroundColor, color: textColor}">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "VpMenu",
  props: {
    mode: {
      type: String,
      default: "horizontal", // vertical | horizontal
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
  },
  provide() {
    return {
      VpMenu: this,
    };
  },
  data() {
    return {
      selectedItemFunc: this.selectedItem,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.$bus.$on("selected", (index) => {
        console.log(index);
      });
    });
  },
  methods: {
    selectedItem(index, indexPath) {
      this.$emit("select", index, indexPath);
    },
  },
};
</script>
<style scoped>
/* 水平 */
.vp-menu-horizontal {
  width: 100%;
  height: 60px;
  background-color: #545c64;
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
  background-color: #545c64;
  list-style: none;
  line-height: 60px;
  color: #ffffff;
  margin: 0;
  padding: 0;
}
</style>