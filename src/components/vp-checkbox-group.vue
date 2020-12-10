<template>
  <div class="vp-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vpCheckboxGroup",
  props: {
    value: {
      type: Array,
      default: []
    }
  },
  provide() {
    return {
      vpCheckboxGroup: this
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