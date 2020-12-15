<template>
  <div
    v-show="isShowBackTop"
    class="vp-backtop"
    @click="backtopHandle"
    :style="{ right: `${right}px`, bottom: `${bottom}px` }"
  >
    <slot>Up</slot>
  </div>
</template>

<script>
export default {
  name: "VpBacktop",
  props: {
    target: [String],
    visibilityHeight: {
      type: Number,
      default: 200,
    },
    right: {
      type: Number,
      default: 50,
    },
    bottom: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      controllNum: 10,
      intervalDelay: 1,
      timer: null,
      isShowBackTop: false,
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.debounce(this.scrollHandle, 100));
  },
  methods: {
    // 防抖
    debounce(fn, wait) {
      let timer = null;
      return function () {
        if (timer !== null) clearInterval(timer);
        timer = setTimeout(fn, wait);
      };
    },
    // 点击置顶事件
    backtopHandle() {
      clearInterval(this.timer);
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let target;
      if (!this.target) {
        target = document.documentElement || document.body;
      } else {
        if (/^\./.test(this.target)) {
          target = document.getElementsByClassName(this.target.substring(1))[0];
          console.log(this.target);
          console.log(target);
        } else if (/^#/.test(this.target)) {
          target = document.getElementById(this.target.substring(1));
        }
      }
      console.log(target.offsetTop);
      let _this = this;
      /* this.timer = window.setInterval(() => {
        document.documentElement.scrollTop -= this.controllNum;
        console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop <= target.offsetTop) {
          window.clearInterval(_this.timer);
        }
      }, _this.intervalDelay); */
      if (target.offsetTop < document.documentElement.scrollTop) {
        this.timer = window.setInterval(() => {
          document.documentElement.scrollTop -= this.controllNum;
          console.log(document.documentElement.scrollTop);
          if (document.documentElement.scrollTop <= target.offsetTop) {
            window.clearInterval(_this.timer);
          }
        }, _this.intervalDelay);
      } else {
        console.log("target.offsetTop < document.documentElement.scrollTop");
        this.timer = window.setInterval(() => {
          document.documentElement.scrollTop += this.controllNum;
          console.log(document.documentElement.scrollTop);
          if (document.documentElement.scrollTop >= target.offsetTop) {
            window.clearInterval(_this.timer);
          }
        }, _this.intervalDelay);
      }
    },
    // 滚动事件
    scrollHandle() {
      let scrolltop = document.documentElement.scrollTop;
      if (scrolltop >= this.visibilityHeight) {
        this.isShowBackTop = true;
      } else {
        this.isShowBackTop = false;
      }
    },
  },
};
</script>
<style scoped>
.vp-backtop {
  cursor: pointer;
  position: fixed;
  z-index: 999;
  /*   bottom: 100px;
  right: 50px; */
  padding: 10px 10px;
  border: 1px solid cadetblue;
  border-radius: 50%;
  background-color: cadetblue;
  color: aliceblue;
}
</style>