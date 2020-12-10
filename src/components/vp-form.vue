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
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  provide() {
    return {
      vpForm: this,
    };
  },
  data() {
    return {
      valid: false,
      hasRule: [],
    };
  },
  created() {},
  mounted() {
    this.validate = function (callback) {
      this.$nextTick(() => {
        callback(this.valid);
      })
    };

    this.$nextTick(() => {
      this.$bus.$on("validate", (hasRuleMsg) => {
        let length = Object.getOwnPropertyNames(this.model).length - 1;
        if (this.hasRule.length === length) {
          this.hasRule = [];
          this.hasRule.push(hasRuleMsg);
          let isValid = this.hasRule.some((item) => item === true);
          isValid ? (this.valid = false) : (this.valid = true);
        } else {
          this.hasRule.push(hasRuleMsg);
          let isValid = this.hasRule.some((item) => item === true);
          isValid ? (this.valid = false) : (this.valid = true);
        }
      });
    });
  },
  methods: {},
};
</script>
<style scoped>
</style>