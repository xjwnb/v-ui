<!--
 * @Author: your name
 * @Date: 2021-09-27 14:58:17
 * @LastEditTime: 2021-09-29 17:09:22
 * @LastEditors: Please set LastEditors
 * @Description: vp-select 选择器
 * @FilePath: \v-ui\src\components\select\vp-select.vue
-->

<template>
  <div class="vp-select">
    <input
      type="text"
      readonly="readonly"
      :placeholder="placeholder"
      @click="handleSelectClick"
      @blur="handleSelectBlur"
      ref="inputSelect"
      :value="currentLabel"
    />
    <span
      :class="['vp-suffix', 'iconfont', 'icon-xiangxia', iconStyleChange]"
      @click="handleSelectClick"
    >
    </span>

    <transition name="slide-fade">
      <div :class="['vp-option-container']" v-show="active">
        <div :class="['vp-option-container_inner', optionContainerClass]">
          <slot @selectOption="selectOption">
            <div class="vp-option_empty" v-if="!hasOptions">
              <span class="vp-option_empty_text">{{ noDataText }}</span>
            </div>
          </slot>
        </div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="vp-option_san" v-show="active"></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "vpSelect",
  props: {
    // 未选中显示的占位符
    placeholder: {
      type: String,
      default: "请选择",
    },
    // v-model
    value: {
      type: String | Number,
      default: "",
    },
    // 选项为空显示的文字
    noDataText: {
      type: String,
      default: "无数据",
    },
  },
  data() {
    return {
      selectVal: "",
      active: false,
      hasOptions: false,
      currentLabel: "",
    };
  },
  watch: {
    /**
     * 插槽
     */
    "$slots.default": {
      handler(val, oldVal) {
        this.hasOptions = val.every(
          (item) => item.componentOptions.tag === "vp-option"
        );
      },
      immediate: true,
      deep: true,
    },

    value: {
      handler(val) {
        this.selectVal = val;
      },
      immediate: true,
    },

    selectVal: {
      handler(val) {
        this.$emit("input", val);
        this.currentLabel = this.$slots.default.find(
          (item) => item.componentOptions.propsData.value === val
        ).componentOptions.propsData.label;
      },
      immediate: true,
    },
  },
  computed: {
    // 点击状态
    iconStyleChange() {
      return this.active ? "vp-suffix_active" : "";
    },

    // 选择项长度修改 class
    optionContainerClass() {
      return this.$slots.default.length > 6 && this.hasOptions
        ? "vp-option-container_long"
        : "";
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.selectVal = this.value;
      // let flag = this.$slots.default.every(item => item.componentOptions.tag === "vp-option");
      // console.log(flag);
    });
  },
  methods: {
    /**
     * 点击事件
     */
    handleSelectClick() {
      this.$refs.inputSelect.focus();
      this.active = !this.active;
    },

    /**
     * 失去焦点事件
     */
    handleSelectBlur() {
      this.active = false;
    },

    /**
     * 选中项点击事件
     */
    selectOption(payload) {
      console.log(payload);
      this.selectVal = payload.value;
      // this.currentLabel = payload.label;
    },
  },
};
</script>

<style lang="less" scoped>
.vp-select {
  min-width: 240px;
  display: inline-block;
  position: relative;
  cursor: pointer;

  input {
    background: none;
    outline: none;
    // border: none;
    width: 100%;
    // min-width: 2px;
    height: 40px;
    box-sizing: border-box;
    border-width: 1px;
    border: 1px solid #dcdfe6;
    padding: 0 30px 0 15px;
    // border-color: #DCDFE6 #DCDFE6;
    // border-top-color: #DCDFE6;
    border-radius: 4px;
    cursor: pointer;
  }

  input:focus {
    // border: none;
    outline: none;
  }

  .vp-suffix {
    // padding: 0 10px;
    position: absolute;
    right: 0;
    height: 100%;
    width: 30px;
    text-align: center;
    line-height: 40px;
    transition: transform 0.5s;
  }

  .vp-suffix_active {
    transform: rotate(180deg);
  }

  .vp-option-container {
    position: absolute;
    box-sizing: border-box;
    // min-width: 240px;
    width: 100%;
    // padding: 10px 20px;
    top: 135%;
    z-index: 9999;
    // border: 1px solid #dcdfe6;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 10px 0;

    .vp-option-container_inner {
      max-height: 204px;
      overflow-x: hidden;
    }
  }

  .vp-option-container_long {
    overflow-y: scroll;
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }

  .vp-option_san {
    position: absolute;
    width: 0;
    height: 0;
    border-width: 9px;
    z-index: 10000;
    border-style: dashed dashed solid;
    border-color: transparent transparent #e4e7ed;
    font-size: 0;
    line-height: 0;
    top: 37px;
    left: 20px;

    &::after {
      content: " ";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 7px;
      z-index: 1;
      border-style: dashed dashed solid;
      border-color: transparent transparent #ffffff;
      font-size: 0;
      line-height: 0;
      top: -5px;
      left: -7px;
    }
  }
}

.vp-option_empty {
  padding: 0 15px;
  width: 100%;
  min-height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .vp-option_empty_text {
    color: #c0c4cc;
    font-size: 12px;
  }
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 7px;
  background-color: #dddee0;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
</style>