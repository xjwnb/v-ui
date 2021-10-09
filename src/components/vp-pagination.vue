<!--
 * @Author: your name
 * @Date: 2021-10-08 15:01:18
 * @LastEditTime: 2021-10-08 17:32:53
 * @LastEditors: Please set LastEditors
 * @Description: 分页
 * @FilePath: \v-ui\src\components\vp-pagination.vue
-->


<template>
  <div class="vp-pagination">
    <!-- 前 -->
    <div class="vp-pagination_button vp-pagination_pre" @click="handleClickPre">
      <span class="iconfont icon-xiangxia"></span>
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
        <div v-if="hasLeft" class="vp-pagination_button">...</div>
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
        <div v-if="hasRight" class="vp-pagination_button">...</div>
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
      class="vp-pagination_button vp-pagination_next"
      @click="handleClickNext"
    >
      <span class="iconfont icon-xiangxia"></span>
    </div>
  </div>
</template>

<script>
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
  },
  data() {
    return {
      hasLeft: false,
      hasRight: false,
    };
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
  },
  created() {},
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
    },

    // 点击下一页
    handleClickNext() {
      if (this.currentPage !== this.lastPageNum) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.vp-pagination {
  // display: flex;
  // justify-content: space-between;
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
    // font-weight: 700;
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
}
</style>