<!--
 * @Author: your name
 * @Date: 2021-10-22 16:27:50
 * @LastEditTime: 2021-10-22 17:15:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\components\tabs\vp-tab-pane.vue
-->

<template>
  <div class="vp-tab-pane">
    pane
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vpTabPane",
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: "",
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

<style lang="less" scoped>
  
</style>