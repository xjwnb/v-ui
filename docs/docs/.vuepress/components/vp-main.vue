<template>
  <main class="vp-main">
    <slot></slot>
  </main>
</template>

<script>
export default {
  name: "vpMain",
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
.vp-main {
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>