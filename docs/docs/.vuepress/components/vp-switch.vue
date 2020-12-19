<template>
  <div class="vp-switch" :class="[isClose, isDisabled]">
    <span class="vp-switch-circle" :class="[isCircleDisabled, isCloseCircle]"
      >#0</span
    >
    <input
      class="vp-switch-inner"
      :class="[isInnerDisabled]"
      type="checkbox"
      :value="value"
      v-model="model"
      @change="changeHandle"
      :disabled="disabled"
    />
  </div>
</template>

<script>
export default {
  name: "vpSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set() {
        this.$emit("input", !this.value);
      },
    },
    isDisabled() {
      return this.disabled ? "vp-switch-disabled" : "";
    },
    isClose() {
      return this.value ? "vp-switch-open" : "vp-switch-close";
    },
    isInnerDisabled() {
      return this.disabled ? "vp-switch-inner-disabled" : "";
    },
    isCircleDisabled() {
      return this.disabled ? "vp-switch-circle-disabled" : "";
    },
    isCloseCircle() {
      return this.value ? "open-switch" : "close-switch";
    },
  },
  created() {},
  mounted() {},
  methods: {
    changeHandle(e) {
      this.$emit("change", e);
    },
  },
};
</script>
<style lang="less" scoped>
.vp-switch {
  cursor: pointer;
  display: inline-block;
  width: 50px;
  height: 25px;

  border-radius: 20px;

  .vp-switch-inner {
    margin: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: relative;
    top: -21px;
    cursor: pointer;
  }
}
/* .vp-switch-circle::after {
  content: "#0";
  color: rgba(255, 255, 255, 0);
  position: relative;
  top: 2px;
  left: -1px;
  padding: 2px;
  border: 1px solid #00f;
  border-radius: 50%;
} */
.vp-switch-circle {
  color: rgba(255, 255, 255, 0);
  background-color: #fff;
  position: relative;
  top: 2px;
  left: -1px;
  padding: 2px;
  border-radius: 50%;
  transition: all 0.6s;
}
.open-switch {
  left: 25px;
  border: 1px solid #13ce66;
}
.close-switch {
  left: -1px;
  border: 1px solid #ff4949;
}
.vp-switch-open {
  background-color: #13ce66;
  border: 1px solid #13ce66;
}
.vp-switch-close {
  background-color: #ff4949;
  border: 1px solid #ff4949;
}
.vp-switch-inner-disabled {
  cursor: not-allowed;
}
.vp-switch-disabled {
  background-color: #eaecf0;
  border: 1px solid #eaecf0;
}
.vp-switch-circle-disabled {
  border: 1px solid #eaecf0;
}
</style>