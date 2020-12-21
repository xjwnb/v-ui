<template>
  <div class="vp-carousel" :style="{ height: height + 'px' }">
    <div class="vp-carousel-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VpCarousel",
  provide() {
    return {
      VpCarousel: this,
    };
  },
  props: {
    height: {
      type: String,
      default: "",
    },
    interval: {
      type: Number,
      default: 3000,
    },
/*     direction: {
      type: String,
      default: "horizontal",
    }, */
    hasTransition: {
      type: Boolean,
      default: true,
    },
    transitionTime: {
      type: Number,
      default: 0.5,
    },
  },
  data() {
    return {
      timer: null,
      timeoutTimer: null,
      intervalTime: null,
    };
  },
  created() {},
  mounted() {
    let width = this.$el.clientWidth;
    let slots = this.$slots.default;
    let slotsLength = slots.length;
    for (let i = 0, l = slotsLength; i < l; i++) {
      slots[i].elm.style.transform = `translate(${i * 100}%)`;
    }

    // 设置过渡
    this.$nextTick(() => {
      if (this.hasTransition) {
        this.timeoutTimer = setTimeout(() => {
          for (let i = 0, l = slotsLength; i < l; i++) {
            slots[i].elm.style.transition = `transform ${this.transitionTime}s`;
          }
        });
      }
    });

    // 移动内容
    let currentIndex = 0;
    this.timer = setInterval(() => {
      for (let i = 0, l = slotsLength; i < l; i++) {
        let transform = slots[i].elm.style.transform;
        let reg = /(-)?[0-9]+/g;
        let transformNum = Number(transform.match(reg)[0]);
        slots[i].elm.style.transform = `translate(${transformNum - 100}%)`;
      }
      if (currentIndex === slotsLength - 1) {
        currentIndex = 0;
      }
      // console.log(currentIndex);
      ++currentIndex;
      console.log(currentIndex);
      for (let i = 0, l = slotsLength; i < l; i++) {
        slots[i].elm.style.opacity = 1;
        let transform = slots[i].elm.style.transform;
        let reg = /(-)?[0-9]+/g;
        let transformNum = Number(transform.match(reg)[0]);
        let lastSlot = slots[slotsLength - 1].elm.style.transform;
        let regExp = /[0-9]+/g;
        let transformLastSlotNum = Number(lastSlot.match(regExp)[0]);
        if (transformNum <= -200) {
          let transformArr = [];
          for (let i = 0, l = slotsLength; i < l; i++) {
            let transform = slots[i].elm.style.transform;
            let reg = /(-)?[0-9]+/g;
            transformArr.push(Number(transform.match(reg)[0]));
          }
          // 降序
          let newTransformArr = transformArr.sort(function (a, b) {
            return b - a;
          });
          slots[i].elm.style.opacity = 0;
          slots[i].elm.style.transform = `translate(${
            newTransformArr[0] + 100
          }%)`;
        }
      }
    }, this.interval);
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearTimeout(this.timeoutTimer);
  },
  methods: {},
};
</script>
<style scoped>
.vp-carousel {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.vp-carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>