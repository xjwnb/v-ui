<template>
  <!-- <button :class="type ? `vp-button-${type}` : 'vp-button-default'"> -->
  <button
    class="vp-button"
    :class="[typeStyle, roundStyle, disabledStyle]"
    @click="clickHandle"
    :disabled="disabled"
  >
    <span>
      <span v-if="icon" :class="icon"></span>
      <slot> vp-button </slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "vpButton",
  inject: {
    vpForm: {
      default: {},
    },
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    round: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      types: ["default", "primary", "success", "info", "warning", "danger"],
    };
  },
  computed: {
    typeStyle() {
      return this.types.includes(this.type)
        ? `vp-button-${this.type}`
        : "vp-button-default";
    },
    roundStyle() {
      return this.round ? "vp-button-round" : "";
    },
    disabledStyle() {
      return this.disabled ? "vp-button-disabled" : "";
    },
  },
  created() {},
  mounted() {},
  methods: {
    clickHandle(event) {
      if (this.vpForm.model) {
        this.vpForm.rules ? this.$bus.$emit("checkForm") : null;
        let propertyNames = Object.getOwnPropertyNames(
          this.vpForm.model
        ).filter((item) => item !== "__ob__");
        let formObj = new Object();
        propertyNames.forEach((key) => {
          formObj[key] = this.vpForm.model[key];
        });
        this.$emit("submit", formObj, event);
      } else {
        this.$emit("click", event);
      }
      // this.$emit("click", event);
    },
    /* submitHandle(event) {
      if (this.vpForm.model) {
        let propertyNames = Object.getOwnPropertyNames(
          this.vpForm.model
        ).filter((item) => item !== "__ob__");
        let formObj = new Object();
        propertyNames.forEach((key) => {
          formObj[key] = this.vpForm.model[key];
        });
        this.$emit("submit", formObj);
      } else {
        this.$emit("submit", event);
      }
    }, */
  },
};
</script>
<style lang="less" scoped>
/* button 默认样式 */
.vp-button {
  outline: none;
  cursor: pointer;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 5px;
}
// default
.vp-button-default {
  color: #95a5a6;
  background-color: #fff;
  border-color: #7f8fa6;

  &:hover {
    color: rgb(95, 199, 224);
    border-color: rgb(131, 200, 240);
  }
}
// primary
.vp-button-primary {
  color: #fff;
  background-color: rgb(96, 185, 245);
  border-color: rgb(96, 185, 245);

  &:active {
    background-color: rgba(36, 129, 250, 0.904);
    border-color: rgba(36, 129, 250, 0.904);
  }
}
// success
.vp-button-success {
  color: #fff;
  background-color: #1abc9c;
  border-color: #1abc9c;

  &:active {
    background-color: #16a085;
    border-color: #16a085;
  }
}
// info
.vp-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:active {
    background-color: #606266;
    border-color: #606266;
  }
}
// warning
.vp-button-warning {
  color: #fff;
  background-color: #ebb563;
  border-color: #ebb563;

  &:active {
    background-color: #e6a23c;
    border-color: #e6a23c;
  }
}
// danger
.vp-button-danger {
  color: #fff;
  background-color: #e27979;
  border-radius: 10%;
  border-color: #e27979;

  &:active {
    background-color: #ff4d4d;
    border-color: #ff4d4d;
  }
}

// round
.vp-button-round {
  border-radius: 25px;
}

// disabled
.vp-button-disabled {
  cursor: not-allowed;
  filter: grayscale(70%);
}
</style>