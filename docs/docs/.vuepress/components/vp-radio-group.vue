
<template>
  <div class="vp-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vpRadioGroup",
  provide() {
    return {
      vpRadioGroup: this
    }
  },
  props: {
    value: {
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

</style>