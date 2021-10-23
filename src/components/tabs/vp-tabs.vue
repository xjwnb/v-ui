<!--
 * @Author: your name
 * @Date: 2021-10-22 16:27:38
 * @LastEditTime: 2021-10-22 17:29:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\components\tabs\vp-tabs.vue
-->

<template>
  <div class="vp-tabs">
    <div class="vp-tabs_item_container">
      <div class="vp-tabs__active-bar"></div>
      <div class="vp-tabs_item" @click="handleClickTabItem" v-for="child in $children" :key="child.name">
        {{ child.label }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vpTabs",
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log(this.$children);
  },
  methods: {
    /**
     * 点击tab事件
     */
    handleClickTabItem(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less" scoped>
.vp-tabs {
  .vp-tabs_item_container {
    display: flex;
    position: relative;

    .vp-tabs__active-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background-color: #409eff;
      z-index: 1;
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      list-style: none;
    }

    .vp-tabs_item {
      padding: 10px 20px;
      cursor: pointer;
    }
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #e4e7ed;
      z-index: 1;
      left: 0;
      bottom: 0;
    }
  }
}
</style>