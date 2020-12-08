<template>
  <div class="vp-input">
    <input class="vp-input-inner" 
      :type="isShowPWD ? 'text' : type" 
      :placeholder="placeholder"
      :value="value"
      @input="inputHandle">
      <span 
        v-if="type === 'password' && value" 
        class="iconfont" 
        :class="isShowPWD ? 'icon-eye' : 'icon-eye1'"
        @click="showPWDHandle"></span>
  </div>
</template>

<script>
export default {
  name: "vpInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      isShowPWD: false
    }
  },
  created() {

  },
  mounted() {

  },
  methods: {
    inputHandle(e) {
      this.$emit("input", e.target.value);
    },
    showPWDHandle() {
      this.isShowPWD = !this.isShowPWD;
    }
  }
}
</script>
<style lang="less" scoped>
// 默认样式
.vp-input {
  width: 100%;
  display: inline-block;
  position: relative;
  
  span {
    position: absolute;
    top: 5px;
    right: 5px;
  }
}
.vp-input-inner {
  width: 100%;
  height: 25px;
  border-color: rgb(94, 170, 214);
  outline: none;
  color: rgb(148, 146, 144);
  border-radius: 5px;
  border-width: 1px;
  padding: 0 5px;

}
</style>