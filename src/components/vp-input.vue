<template>
  <div class="vp-input">
    <input
      v-if="type !== 'textarea'"
      class="vp-input-inner"
      :class="disabled ? 'input-disabled' : ''"
      :type="isShowPWD ? 'text' : type ? 'text' : type"
      :placeholder="placeholder"
      :value="value"
      @input="inputHandle"
      :disabled="disabled"
      @blur="blurHandle"
      @focus="focusHandle"
    />
    <!--  -->
    <textarea
      v-else
      class="vp-input-textarea"
      name=""
      id=""
      :cols="cols"
      :rows="rows"
      :value="value"
      @input="textareaInputHandle"
      @change="textareaChangeHandle"
      :readonly="readonly"
      :maxlength="maxlength"
      @blur="blurHandle"
      @focus="focusHandle"
    ></textarea>
    <span
      v-if="type === 'password' && value"
      class="iconfont"
      :class="isShowPWD ? 'icon-eye' : 'icon-eye1'"
      @click="showPWDHandle"
    ></span>
    <span
      v-if="clearable && value"
      class="iconfont icon-clear_circle_outlined"
      @click="clearHandle"
    ></span>
  </div>
</template>

<script>
export default {
  name: "vpInput",
  props: {
    type: {
      type: String, // "text" | "password" | "textarea"
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    // textarea 特有
    cols: {
      type: Number,
      default: 20,
    },
    rows: {
      type: Number,
      default: 5,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      isShowPWD: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 输入input事件
    inputHandle(e) {
      this.$emit("input", e.target.value);
    },
    // input blur 事件
    blurHandle(e) {
      this.$emit("blur", e);
    },
    // focus 事件
    focusHandle(e) {
      this.$emit("focus", e);
    },
    // 切换密码显示
    showPWDHandle() {
      this.isShowPWD = !this.isShowPWD;
    },
    // 清除事件
    clearHandle() {
      this.$emit("input", "");
    },
    // textarea input 事件
    textareaInputHandle(e) {
      this.$emit("input", e.target.value);
    },
    // textarea change 事件
    textareaChangeHandle(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>
<style lang="less" scoped>
// 默认样式
.vp-input {
  width: 100%;
  display: inline-block;
  position: relative;

  span {
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .vp-input-inner {
    box-sizing: border-box;
    width: 100%;
    height: 35px;
    border-color: rgb(94, 170, 214);
    outline: none;
    color: rgb(148, 146, 144);
    border-radius: 5px;
    border-width: 1px;
    padding: 5px 10px;
  }

  .vp-input-textarea {
    outline: none;
    border-color: rgb(94, 170, 214);
  }
}

.input-disabled {
  cursor: not-allowed;
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
}
</style>