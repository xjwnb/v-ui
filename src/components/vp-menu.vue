<template>
  <ul class="vp-menu">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "VpMenu",
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
.vp-menu {
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
</style>