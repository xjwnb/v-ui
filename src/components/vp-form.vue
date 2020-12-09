<template>
  <div class="vp-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vpForm",
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  provide() {
    return {
      vpForm: this
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