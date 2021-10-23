<!--
 * @Author: your name
 * @Date: 2021-10-22 16:27:50
 * @LastEditTime: 2021-10-23 17:18:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\components\tabs\vp-tab-pane.vue
-->

<template>
  <div class="vp-tab-pane">
    <transition name="slide-fade">
      <div class="vp-tab-pane_content" v-show="currentTab === name">
        pane
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "vpTabPane",
  props: {
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  watch: {
    "$parent.value": {
      handler(newVal) {
        this.currentTab = newVal;
      },
      immediate: true,
    },
  },
  data() {
    return {
      currentTab: "",
    };
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.vp-tab-pane {
  .vp-tab-pane_content {
    padding: 10px;
  }
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */
.slide-fade-enter
// , .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>