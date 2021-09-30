<!--
 * @Author: your name
 * @Date: 2021-09-27 15:19:53
 * @LastEditTime: 2021-09-29 23:09:24
 * @LastEditors: Please set LastEditors
 * @Description: vp-option 
 * @FilePath: \v-ui\src\components\select\vp-option.vue
-->

<template>
  <div
    :class="['vp-option', activeClass, disabledClass]"
    @click="handleOptionClick"
  >
    <span class="vp-option_label">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  name: "vpOption",
  props: {
    option: {
      type: Object,
      default: () => ({
        value: "",
        label: "",
      }),
    },
    // label
    label: {
      type: String,
      default: "",
    },
    // value
    value: {
      type: String,
      default: "",
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    "$parent.selectVal": {
      handler(val) {
        this.isActive = val === this.value ? true : false;
      },
      immediate: true,
    },
  },
  computed: {
    //
    activeClass() {
      return this.isActive ? "vp-option_active" : "";
    },
    disabledClass() {
      return this.disabled ? "vp-option_disabled" : "";
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    /**
     * 点击选项
     */
    handleOptionClick() {
      if (this.disabled) {
        this.$parent.active = true;
        return;
      }
      let selectOption = this.$parent.selectOption;
      selectOption &&
        selectOption({
          value: this.value,
          label: this.label,
        });
      this.$parent.active = false;
    },
  },
};
</script>

<style lang="less" scoped>
.vp-option {
  height: 34px;
  padding: 0 20px;
  line-height: 34px;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #f5f7fa;
  }
}

.vp-option_active {
  background: #f5f7fa;
  color: #409eff;
  font-weight: 700;
}

.vp-option_disabled {
  color: #c0c4cc;
  cursor: not-allowed;
}
</style>