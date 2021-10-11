<!--
 * @Author: your name
 * @Date: 2021-10-08 15:01:18
 * @LastEditTime: 2021-10-11 11:20:06
 * @LastEditors: Please set LastEditors
 * @Description: 分页
 * @FilePath: \v-ui\src\components\vp-pagination.vue
-->


<template>
  <div class="vp-pagination" v-if="isHidden">
    <!-- 前 -->
    <div
      :class="['vp-pagination_button', !prevText ? 'vp-pagination_pre' : '']"
      @click="handleClickPre"
    >
      <template v-if="!prevText">
        <span class="iconfont icon-xiangxia"></span>
      </template>
      <template v-else>
        <span>{{ prevText }}</span>
      </template>
    </div>

    <!-- 内容 -->
    <template v-if="lastPageNum <= 7">
      <div
        :class="[
          'vp-pagination_button',
          page === currentPage ? 'vp-pagination_button_active' : '',
        ]"
        v-for="page in lastPageNum"
        :key="page"
        @click="handleClickPageNum(page)"
      >
        {{ page }}
      </div>
    </template>
    <template v-else>
      <template>
        <!-- 第一个 -->
        <div
          :class="[
            'vp-pagination_button',
            1 === currentPage ? 'vp-pagination_button_active' : '',
          ]"
          @click="handleClickPageNum(1)"
        >
          1
        </div>
        <div
          v-if="hasLeft"
          class="vp-pagination_button"
          @click="handleClickPreBtn"
        >
          ...
        </div>
        <!-- 中间 -->
        <div
          :class="[
            'vp-pagination_button',
            page === currentPage ? 'vp-pagination_button_active' : '',
          ]"
          v-for="page in middlePageNumArr"
          :key="page"
          @click="handleClickPageNum(page)"
        >
          {{ page }}
        </div>
        <div
          v-if="hasRight"
          class="vp-pagination_button"
          @click="handleClickNextBtn"
        >
          ...
        </div>
        <!-- 最后一个 -->
        <div
          :class="[
            'vp-pagination_button',
            lastPageNum === currentPage ? 'vp-pagination_button_active' : '',
          ]"
          @click="handleClickPageNum(lastPageNum)"
        >
          {{ lastPageNum }}
        </div>
      </template>
    </template>

    <!-- 后 -->
    <div
      :class="['vp-pagination_button', !nextText ? 'vp-pagination_next' : '']"
      @click="handleClickNext"
    >
      <template v-if="!nextText">
        <span class="iconfont icon-xiangxia"></span>
      </template>
      <template v-else>
        <span>{{ nextText }}</span>
      </template>
    </div>

    <!-- jumper -->
    <template v-if="hasJumper">
      <div class="vp-pagination_jumper_container">
        <span class="vp-pagination_jumper_txt"> 前往 </span>
        <div class="vp-pagination_input">
          <vp-input
            v-model="page"
            @input="handleInput"
            @blur="handleInputBlur"
          />
        </div>
        <span class="vp-pagination_jumper_txt"> 页 </span>
      </div>
    </template>
  </div>
</template>

<script>
import VpInput from "./input/vp-input.vue";
export default {
  name: "vpPagination",
  props: {
    // 当前页码
    currentPage: {
      type: Number,
      default: 1,
    },
    // 每页条大小
    pageSize: {
      type: Number,
      default: 10,
    },
    // 总数
    total: {
      type: Number,
      default: 10,
    },
    // 单页是否被隐藏
    hideOnSinglePage: {
      type: Boolean,
      default: false,
    },
    // 布局
    layout: {
      type: String,
      default: "", // jumper
    },
    // 上一页文字
    prevText: {
      type: String,
      default: "",
    },
    // 下一页文字
    nextText: {
      type: String,
      default: "",
    },
  },
  components: {
    VpInput,
  },
  data() {
    return {
      hasLeft: false,
      hasRight: false,
      page: this.currentPage,
      filterPage: 1,
    };
  },
  watch: {
    currentPage(newVal) {
      this.$emit("current-change", newVal);
      this.page = newVal;
    },
  },
  computed: {
    // 最后一页的页码数
    lastPageNum() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 中间的5个页码数组
    middlePageNumArr() {
      let result = [];
      switch (this.currentPage) {
        case 1:
          result = [2, 3, 4, 5, 6];
          break;
        case this.lastPageNum:
          result = [
            this.lastPageNum - 5,
            this.lastPageNum - 4,
            this.lastPageNum - 3,
            this.lastPageNum - 2,
            this.lastPageNum - 1,
          ];
          break;
        default:
          if (this.currentPage - 3 > 1) {
            this.hasLeft = true;
            result = [
              this.currentPage - 2,
              this.currentPage - 1,
              this.currentPage,
              this.currentPage + 1,
              this.currentPage + 2,
            ];
          } else {
            this.hasLeft = false;
            result = [2, 3, 4, 5, 6];
          }
          if (this.currentPage + 3 < this.lastPageNum) {
            this.hasRight = true;
            result = result || [
              this.currentPage - 2,
              this.currentPage - 1,
              this.currentPage,
              this.currentPage + 1,
              this.currentPage + 2,
            ];
          } else {
            this.hasRight = false;
            result = [
              this.lastPageNum - 5,
              this.lastPageNum - 4,
              this.lastPageNum - 3,
              this.lastPageNum - 2,
              this.lastPageNum - 1,
            ];
          }
          break;
      }
      return result;
    },

    // 分页器隐藏
    isHidden() {
      return !(this.lastPageNum === 1 && this.hideOnSinglePage);
    },
    // 是否 jumper
    hasJumper() {
      return /jumper/.test(this.layout);
    },
  },
  created() {
    this.handleInit();
  },
  mounted() {},
  methods: {
    // 点击页码
    handleClickPageNum(pageNum) {
      this.$emit("update:currentPage", pageNum);
    },
    // 点击前一页
    handleClickPre() {
      if (this.currentPage !== 1) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
      let currentPage = this.currentPage === 1 && 1;
      currentPage = this.currentPage !== 1 && this.currentPage - 1;
      currentPage = currentPage || 1;
      this.$emit("pre-click", currentPage);
    },

    // 点击下一页
    handleClickNext() {
      if (this.currentPage !== this.lastPageNum) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
      let currentPage =
        this.currentPage === this.lastPageNum && this.lastPageNum;
      currentPage =
        this.currentPage !== this.lastPageNum && this.currentPage + 1;
      currentPage = currentPage || this.lastPageNum;
      this.$emit("next-click", currentPage);
    },

    // 初始化是否显示 left right
    handleInit() {
      switch (this.currentPage) {
        case 1:
          if (this.lastPageNum > 7) {
            this.hasRight = true;
          }
          break;
        case this.lastPageNum:
          if (this.lastPageNum > 7) {
            this.hasLeft = true;
          }
          break;
        default:
          if (this.currentPage - 3 > 1) {
            this.hasLeft = true;
          } else {
            this.hasLeft = false;
          }
          if (this.currentPage + 3 < this.lastPageNum) {
            this.hasRight = true;
          } else {
            this.hasRight = false;
          }
          break;
      }
    },

    /**
     * 点击左边 ... 按钮
     */
    handleClickPreBtn() {
      if (this.currentPage !== 1) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
    },

    /**
     * 点击右边 ... 按钮
     */
    handleClickNextBtn() {
      if (this.currentPage !== this.lastPageNum) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },

    /**
     * 输入框 - input
     */
    handleInput(val) {
      let newVal = String(val);
      newVal = newVal.replace(/\s/g, "");
      newVal = newVal.replace(/[a-zA-Z]/g, "");
      newVal = newVal.replace(/^0/, "");
      newVal = Number(newVal);
      this.page = newVal;
      val = newVal;
    },

    /**
     * input blur 事件
     */
    handleInputBlur() {
      let page = this.lastPageNum >= this.page ? this.page : this.currentPage;
      this.$emit("update:currentPage", page);
    },
  },
};
</script>

<style lang="less" scoped>
.vp-pagination {
  .vp-pagination_pre {
    display: inline-block;
    transform: rotate(90deg);
  }

  .vp-pagination_next {
    display: inline-block;
    transform: rotate(-90deg);
  }

  .icon-xiangxia {
    font-size: 14px;
  }

  .vp-pagination_button {
    min-width: 20px;
    min-height: 20px;
    text-align: center;
    line-height: 20px;
    padding: 6px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
    font-weight: 700;
    display: inline-block;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      color: #409eff;
    }
  }

  .vp-pagination_button_active {
    color: #409eff;
  }

  .vp-pagination_jumper_container {
    display: inline-block;
    margin-left: 10px;

    .vp-pagination_jumper_txt {
      color: #606266;
    }

    .vp-pagination_input {
      width: 45px;
      display: inline-block;

      .vp-input {
        /deep/.vp-input-inner {
          height: 30px;
        }
        /deep/input {
          text-align: center;
        }
      }
    }
  }
}
</style>