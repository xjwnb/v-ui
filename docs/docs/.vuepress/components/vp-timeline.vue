<!--
 * @Author: your name
 * @Date: 2021-10-13 11:24:23
 * @LastEditTime: 2021-10-25 08:20:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\components\timeline\vp-timeline.vue
-->

<template>
  <div class="vp-timeline">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vpTimeline",
  data() {
    return {
      // 插槽中是否为 vpTimelineItem 组件
      rightSlot: false,

    };
  },
  created() {},
  mounted() {
    this.handleRightSlot();
    this.handleDeleteLastDiv();
  },

  methods: {
    /**
     * 判断插槽是否正确
     */
    handleRightSlot() {
      let children = Array.from(this.$slots.default);
      let rightSlot = children.every((item) =>
        /vpTimelineItem$/g.test(item.tag)
      );

      this.rightSlot = rightSlot;
      if (!rightSlot) {
        throw new Error("slot 插槽错误");
      }
    },

    /**
     * 删除最后一个时间戳中的左侧竖 div
     */
    handleDeleteLastDiv() {
      let children = Array.from(this.$slots.default);
      let lastEle = children[children.length - 1].elm.childNodes[0];
      lastEle.style.display = "none";
    },

  },
};
</script>

<style lang="less" scoped>
.vp-timeline {
  padding-left: 100px;
}
</style>