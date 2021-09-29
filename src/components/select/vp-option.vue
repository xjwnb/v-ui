<!--
 * @Author: your name
 * @Date: 2021-09-27 15:19:53
 * @LastEditTime: 2021-09-29 11:30:17
 * @LastEditors: Please set LastEditors
 * @Description: vp-option 
 * @FilePath: \v-ui\src\components\select\vp-option.vue
-->

<template>
  <div
    :class="['vp-option', isActive ? 'vp-option_active' : '']"
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
  },
  watch: {
    "$parent.selectVal": {
      handler(val) {
        // console.log(val);
        this.isActive = val === this.value ? true : false;
      },
      immediate: true,
      // deep: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      // console.log(this.$parent);
    });
  },
  methods: {
    /**
     * 点击选项
     */
    handleOptionClick() {
      // this.$emit("selectOption", this.value);
      // console.log(this);
      //
      let selectOption = this.$parent.selectOption;
      selectOption &&
        selectOption({
          value: this.value,
          label: this.label,
        });
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

  // .vp-option_label {

  // }

  &:hover {
    background: #f5f7fa;
  }
}

.vp-option_active {
  background: #f5f7fa;
  color: #409eff;
  font-weight: 700;
}
</style>