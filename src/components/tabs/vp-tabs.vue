<template>
  <div class="vp-tabs">
    <div class="vp-tabs_item_container">
      <div
        :class="[
          'vp-tabs_item',
          value === child.name ? 'vp-tabs_item_active' : '',
        ]"
        @click="handleClickTabItem(child.name, $event)"
        v-for="child in $children"
        :key="child.name"
      >
        {{ child.label }}
      </div>
      <div
        class="vp-tabs__active-bar"
        :style="{
          width: clientWidth + 'px',
          transform: `translateX(${scrollleft}px)`,
        }"
      ></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "vpTabs",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.$nextTick(() => {
          let currentIndex = this.$children.findIndex((item) => {
            return item.name === newVal;
          });
          this.currentIndex = currentIndex;
          let itemNodeList = this.$el.children[0].children;
          let scrollleft = 0;
          for (let i = 0; i < itemNodeList.length - 1; i++) {
            if (i !== this.currentIndex) {
              scrollleft += itemNodeList[i].clientWidth;
            } else {
              this.clientWidth = itemNodeList[i].clientWidth;
              break;
            }
          }
          this.scrollleft = scrollleft;
        });
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      currentIndex: 0,
      scrollleft: 0,
      clientWidth: 0,
    };
  },
  created() {},
  mounted() {
    let currentIndex = this.$children.findIndex((item) => {
      return item.name === this.value;
    });
    this.currentIndex = currentIndex;
    setTimeout(() => {
      let itemlist = this.$el.querySelectorAll(".vp-tabs_item");
      this.clientWidth = itemlist[this.currentIndex]?.clientWidth;
      let itemNodeList = this.$el.children[0].children;
      let scrollleft = 0;
      for (let i = 0; i < itemNodeList.length - 1; i++) {
        if (i !== this.currentIndex) {
          scrollleft += itemNodeList[i].clientWidth;
        } else {
          this.clientWidth = itemNodeList[i].clientWidth;
          break;
        }
      }
      this.scrollleft = scrollleft;
    }, 500);
  },
  methods: {
    /**
     * 点击tab事件
     */
    handleClickTabItem(name, e) {
      this.$emit("input", name);
    },
  },
};
</script>

<style lang="less" scoped>
.vp-tabs {
  .vp-tabs_item_container {
    display: flex;
    position: relative;
    z-index: 1;
    .vp-tabs__active-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 4px;
      background-color: #409eff;
      z-index: 100;
      // transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      list-style: none;
      // transform: translateX();
    }
    .vp-tabs_item {
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        color: #409eff;
      }
    }
    .vp-tabs_item_active {
      color: #409eff;
    }
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #e4e7ed;
      z-index: 2;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
