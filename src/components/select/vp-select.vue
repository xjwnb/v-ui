<!--
 * @Author: your name
 * @Date: 2021-09-27 14:58:17
 * @LastEditTime: 2021-10-06 02:41:53
 * @LastEditors: Please set LastEditors
 * @Description: vp-select 选择器
 * @FilePath: \v-ui\src\components\select\vp-select.vue
-->

<template>
  <div :class="['vp-select', disabledClass]" :style="disabledStyle">
    <input
      type="text"
      :readonly="canRead"
      :placeholder="placeholder"
      @blur="handleSelectBlur"
      @focus="handleSelectFocus"
      ref="inputSelect"
      :value="currentLabel"
      :disabled="disabled"
      :style="disabledStyle"
      :class="inputClass"
      @input="handleInput"
      @click="handleSelectClick"
    />
    <!-- <div :class="['vp-suffix_container', clearClass]"> -->
    <span
      :class="['vp-suffix', 'iconfont', 'icon-xiangxia', iconStyleChange]"
      @mouseover="handleMouseover"
      v-if="!isClear"
      @click="handleSelectClick"
    >
    </span>

    <span
      :class="['vp-suffix_clearable', 'iconfont', 'icon-clear_circle_outlined']"
      @mouseleave="handleMouseleave"
      @click="handleClear"
      v-else
    ></span>
    <!-- </div> -->

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
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否可清除
    clearable: {
      type: Boolean,
      default: false,
    },
    // 可搜索
    filterable: {
      type: Boolean,
      default: false,
    },
    // 搜索方法
    filterMethod: {
      type: Function,
    },
  },
  data() {
    return {
      selectVal: "",
      active: false,
      hasOptions: false,
      currentLabel: "",
      isClear: false,
      timer: null,
      delay: 1000,
      filterFun: null,
      filterLabel: "",
      copySlots: null,
      optionArr: null,
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
          (item) => item?.componentOptions.propsData.value === val
        )?.componentOptions.propsData.label;
      },
      immediate: true,
    },

    filterLabel: {
      handler(val) {
        this.$nextTick(() => {
          // let optionArr = this.$el.querySelectorAll(".vp-option");
          let optionArr =
            this.optionArr || this.$el.querySelectorAll(".vp-option");
          if (val) {
            let reg = new RegExp(`${val}`, "g");
            for (let option of optionArr) {
              reg.lastIndex = 0;
              if (!reg.test(option.innerText)) {
                option.style.display = "none";
              }
            }
          } else {
            for (let option of optionArr) {
              console.log(option.innerText);
              option.style.display = "block";
            }
          }
        });
      },
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

    // 禁用 class
    disabledClass() {
      return this.disabled ? "vp-select_disabled" : "";
    },

    // 是否禁用 style
    disabledStyle() {
      return this.disabled ? "cursor: not-allowed" : "";
    },

    inputClass() {
      return this.active ? "input_disactive" : "";
    },

    /**
     * 是否可读
     */
    canRead() {
      return this.filterable ? false : true;
    },
  },
  created() {
    this.selectVal = this.value;

    // 防抖返回函数
    if (this.filterable) {
      this.filterFun = this.debounce(this.handleFilter);
      // this.copySlots =
    }

    // this.$nextTick(() => {
    //   this.copySlots = JSON.parse(JSON.stringify(this.$slots.default));
    // })
  },
  mounted() {
    this.$nextTick(() => {
      this.optionArr = this.$el.querySelectorAll(".vp-option");
    });
  },
  methods: {
    /**
     * 点击事件
     */
    handleSelectClick() {
      if (this.disabled) {
        this.active = false;
        return;
      }
      // this.active = this.active ? false : true;
      this.active && this.$refs.inputSelect.focus();
      if (!this.active) {
        this.active = false;
      }
      // this.$refs.inputSelect.focus();
      // this.active = !this.active;
      // this.active = true;
    },

    /**
     * 失去焦点事件
     */
    handleSelectBlur() {
      this.active = !this.active;
      console.log("失去焦点");
    },

    /**
     * 获取焦点事件
     */
    handleSelectFocus() {
      console.log("获取焦点");
      this.active = !this.active;
      // this.active = true;
      // this.active
    },

    /**
     * 选中项点击事件
     */
    selectOption(payload) {
      console.log(payload);
      this.selectVal = payload.value;
    },

    /**
     * suffix 移动事件
     */
    handleMouseover() {
      this.isClear =
        this.clearable && !this.disabled && this.currentLabel ? true : false;
    },

    /**
     * suffix_clearable 鼠标离开事件
     */
    handleMouseleave() {
      this.isClear = false;
    },

    /**
     * suffix_clearable 点击事件
     */
    handleClear() {
      this.selectVal = "";
    },

    /**
     * input输入框 input 事件
     */
    handleInput(e) {
      let val = e.target.value;
      this.currentLabel = val;
      this.filterFun && this.filterFun(val);
    },

    /**
     * 防抖
     */
    debounce(fn) {
      let _this = this;
      _this.timer = null;
      return function () {
        if (_this.timer) {
          clearTimeout(_this.timer);
        }
        _this.timer = setTimeout(() => {
          fn.apply(this, arguments);
        }, _this.delay);
      };
    },

    //
    handleFilter(val) {
      if (this.filterMethod) {
        this.filterMethod(val);
        return;
      } else {
        this.filterLabel = val;
      }
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

  span {
    color: #c2cadb;
  }

  input {
    background: none;
    outline: none;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
    border-width: 1px;
    border: 1px solid #dcdfe6;
    padding: 0 30px 0 15px;
    border-radius: 4px;
    cursor: pointer;
    transition: border 0.5s;
  }

  .input_disactive {
    border: 1px solid #409eff;
  }

  input:focus {
    outline: none;
    border: 1px solid #409eff;
  }

  .vp-suffix {
    position: absolute;
    right: 0;
    height: 100%;
    width: 30px;
    text-align: center;
    line-height: 40px;
    transition: transform 0.5s;
    z-index: 2;
  }

  .vp-suffix_active {
    transform: rotate(180deg);
  }

  .vp-suffix_clearable {
    position: absolute;
    right: 0;
    height: 100%;
    width: 30px;
    text-align: center;
    line-height: 40px;
    transition: transform 0.5s;
    z-index: 2;
  }

  .vp-suffix_clearable_active {
    &:hover .vp-suffix_clearable {
      display: block;
      color: green;
    }
    &:hover .vp-suffix {
      display: none;
      color: blue;
    }
  }
  // }

  .vp-option-container {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    top: 135%;
    z-index: 9999;
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

.vp-select_disabled {
  background-color: #f5f7fa;
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