<template>
  <div class="vp-carousel" :style="{ height: height + 'px' }">
    <div class="vp-carousel-arrow">
      <ul class="vp-carousel-arrow-ul">
        <li
          class="vp-carousel-arrow-li"
          v-for="(slot, index) in $slots.default"
          :key="index"
        >
          <button :class="{'vp-carousel-arrow-button': true, 'vp-carousel-button-isActive': (currentIndex === index ? true : false)}"></button>
        </li>
      </ul>
    </div>
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
      // intervalTime: null,
      currentIndex: 0
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
    this.timer = setInterval(() => {
      for (let i = 0, l = slotsLength; i < l; i++) {
        let transform = slots[i].elm.style.transform;
        let reg = /(-)?[0-9]+/g;
        let transformNum = Number(transform.match(reg)[0]);
        slots[i].elm.style.transform = `translate(${transformNum - 100}%)`;
      }
      
      // console.log(currentIndex);
      ++this.currentIndex;
      if (this.currentIndex === slotsLength) {
        this.currentIndex = 0;
      }
      console.log(this.currentIndex);
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
.vp-carousel-arrow {
  position: absolute;
  display: flex;
  height: auto;
  z-index: 2;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.vp-carousel-arrow-ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-content: flex-end;
}
.vp-carousel-arrow-li {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.vp-carousel-arrow-button {
  margin: 0;
  padding: 0;
  outline: none;
  border-radius: 0;
  background-color: transparent;
  line-height: inherit;
  width: max-content;
}
.vp-carousel-arrow-button:after {
  border: none;
}
.vp-carousel-arrow-button {
  background-color: lightblue;
  border: none;
  width: 30px;
  height: 2px;
  border-radius: 2px;
  margin: 3px 5px;
  padding: 2px;
}
.vp-carousel-button-isActive {
  background-color: aqua;
}
</style>