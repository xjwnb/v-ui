<template>
  <div :class="['vp-form-item', labelStyleClass]">
    <label
      :class="['vp-form-item-label', labelStyleClass]"
      :style="{ width: labelWidth + 'px' }"
    >
      <span v-if="label && required" class="iconfont icon-ziyuan1"></span>
      <template v-if="label">
        <span>{{ label }}</span>
      </template>
    </label>
    <div class="vp-form-item-content">
      <slot></slot>
      <span class="rule-message" v-if="ruleMessage && label">{{
        ruleMessage
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "vpFormItem",
  provide() {
    return {
      vpFormItem: this,
    };
  },
  inject: {
    vpForm: {
      default: {},
    },
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    labelWidth: {
      type: Number,
      default: 100,
    },
    labelStyle: {
      type: String, // right | left | top
      default: "right",
    },
    prop: {
      type: String,
    },
  },
  computed: {
    labelStyleClass() {
      switch (this.labelStyle) {
        case "right":
          return "";
        case "left":
          return "vp-form-item-label-left";
        case "top":
          return "vp-form-item-label-top";
        default:
          return "";
      }
    },
  },
  data() {
    return {
      ruleMessage: "",
      required: false,
    };
  },
  created() {
    // console.log();
    let rule = this.vpForm.rules[this.prop];
    if (rule) {
      rule.forEach((rule) => {
        if (rule.required === true) {
          this.required = true;
        }
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$bus.$on("ruleChange", (rule) => {
        this.ruleMessage = rule.ruleMessage;
      });
    });
  },
};
</script>
<style lang="less" scoped>
.vp-form-item {
  display: flex;
  align-items: center;
  padding: 10px;

  .vp-form-item-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    .rule-message {
      position: absolute;
      font-size: 8px;
      bottom: -15px;
      color: #ff4949;
    }
  }
}
.vp-form-item-label {
  display: flex;
  justify-content: flex-end;
  .iconfont {
    align-self: center;
    color: #ff4949;
    padding-top: 7px;
  }
}
.vp-form-item-label-left {
  justify-content: flex-start;
}
.vp-form-item-label-top {
  display: block;
  margin-bottom: 5px;
}
</style>