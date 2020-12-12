<template>
  <div class="vp-loading" >
    <span :class="'iconfont ' + iconfont"></span>{{ message }}
  </div>
</template>

<script>
export default {
  name: "VpLoading",
  props: {
    message: {
      type: String,
      default: ""
    },
    iconfont: {
      type: String,
      default: ""
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
.vp-loading {
  /* position: relative; */
  position: fixed;
  z-index: 999;
  top: 0px;
  right: 0;
  left: 0;
  bottom: 0;
  /* #2c3e50 */
  background-color: rgba(44, 62, 80, .7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.iconfont {
  margin-right: .2rem
}
</style>