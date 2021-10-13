<!--
 * @Author: your name
 * @Date: 2021-10-13 11:24:37
 * @LastEditTime: 2021-10-13 14:40:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\components\timeline\vp-timeline-item.vue
-->

<template>
  <div class="vp-timeline-item">
    <div class="vp-timeline-item_tail" :style="{background: color}"></div>
    <div class="vp-timeline-item_node" :style="{background: color}"></div>

    <!-- timestamp 时间戳 top -->
    <div
      v-if="placement === 'top'"
      class="vp-timeline-item_timestamp timestamp_top"
    >
      {{ timestamp }}
    </div>

    <!-- 插槽 -->
    <div class="vp-timeline-item_content">
      <slot></slot>
    </div>

    <!-- timestamp 时间戳 bottom -->
    <div
      v-if="placement === 'bottom'"
      class="vp-timeline-item_timestamp timestamp_bottom"
    >
      {{ timestamp }}
    </div>
  </div>
</template>

<script>
export default {
  name: "vpTimelineItem",
  props: {
    // 时间戳
    timestamp: {
      type: String,
      default: "",
    },
    // 时间戳位置 top/bottom
    placement: {
      type: String,
      default: "bottom",
    },
    // color 颜色
    color: {
      type: String,
      default: "#e4e7ed",
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>

<style lang="less" scoped>
.vp-timeline-item {
  padding-bottom: 20px;
  position: relative;

  .vp-timeline-item_tail {
    position: absolute;
    width: 2px;
    height: 100%;
    // background: #e4e7ed;
    left: -20px;
  }

  .vp-timeline-item_node {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    // background: #e4e7ed;
    left: -25px;
  }

  .vp-timeline-item_timestamp {
    font-size: 14px;
    color: #9093b3;
  }

  .timestamp_top {
    margin-bottom: 8px;
  }

  .timestamp_bottom {
    margin-top: 8px;
  }
}
</style>