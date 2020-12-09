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
    this.validate = function() {
      console.log("validate");
    }
    this.validate();
    console.log(this);
  },
  methods: {
    checkForm() {
      // console.log(object);
    }
  }
}
</script>
<style scoped>

</style>