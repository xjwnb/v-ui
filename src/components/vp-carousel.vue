<template>
  <div class="vp-carousel" :style="{ height: height + 'px' }">
    <div class="vp-carousel-arrow">
      <ul class="vp-carousel-arrow-ul">
        <li
          class="vp-carousel-arrow-li"
          v-for="(slot, index) in $slots.default"
          :key="index"
        >
          <button
            :class="{
              'vp-carousel-arrow-button': true,
              'vp-carousel-button-isActive':
                currentIndex === index ? true : false,
            }"
          ></button>
        </li>
      </ul>
    </div>
    <div class="vp-carousel-arrow-aside" v-if="isShowAsideBtn">
      <button class="vp-carousel-arrow-aside-left" @click="leftBtn"><</button>
      <button class="vp-carousel-arrow-aside-right" @click="rightBtn">></button>
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
      default: "300",
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
      currentIndex: 0,
      isShowAsideBtn: false,
    };
  },
  created() {},
  mounted() {
    let width = this.$el.clientWidth;
    let slots = this.$slots.default;
    let slotsLength = slots.length;
    let __this = this;
    this.$el.addEventListener("mouseover", function () {
      __this.isShowAsideBtn = true;
    });
    this.$el.addEventListener("mouseleave", function () {
      __this.isShowAsideBtn = false;
    });

    // 图片默认位置
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
      this.intervalChangeFunc(slots, slotsLength);
      /*       for (let i = 0, l = slotsLength; i < l; i++) {
        let transform = slots[i].elm.style.transform;
        let reg = /(-)?[0-9]+/g;
        let transformNum = Number(transform.match(reg)[0]);
        if (transformNum === 0) {
          this.currentIndex = i + 1;
          if (this.currentIndex === slotsLength) {
            this.currentIndex = 0;
          }
        }
        slots[i].elm.style.transform = `translate(${transformNum - 100}%)`;
      }

      // console.log(currentIndex);
      // ++this.currentIndex;
      // if (this.currentIndex === slotsLength) {
      //   this.currentIndex = 0;
      // }
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
      } */
    }, this.interval);

    let btns = this.$el.getElementsByClassName("vp-carousel-arrow-button");
    let _this = this;
    btns.forEach((btn, index) => {
      btn.addEventListener("mouseover", function () {
        _this.currentIndex = index;
        clearInterval(_this.timer);
        _this.changefirst(index);
        for (let i = 0, l = btns.length; i < l; i++) {
          btns[i].classList.remove("vp-carousel-button-isActive");
        }
        this.classList.add("vp-carousel-button-isActive");
      });
      btn.addEventListener("mouseleave", function () {
        _this.timer = setInterval(() => {
          _this.intervalChangeFunc(slots, slotsLength);
        }, _this.interval);
      });
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearTimeout(this.timeoutTimer);
  },
  methods: {
    changefirst(index) {
      let slots = this.$slots.default;
      let slotsLength = slots.length;
      let oldCurrentIndex;
      for (let i = 0, l = slotsLength; i < l; i++) {
        let transform = slots[i].elm.style.transform;
        let reg = /(-)?[0-9]+/g;
        let transformNum = Number(transform.match(reg)[0]);
        if (transformNum === 0) {
          oldCurrentIndex = i;
          break;
        }
      }
      for (let ii = 0; ii < slotsLength; ii++) {
        if (ii === index) {
          slots[ii].elm.style.transform = `translate(0%)`;
        } else if (ii > index) {
          slots[ii].elm.style.transform = `translate(${(ii - index) * 100}%)`;
        } else {
          // slots[ii].elm.style.transform = `translate(-${(index - ii) * 100}%)`;
          let transform = slots[ii].elm.style.transform;
          let reg = /(-)?[0-9]+/g;
          let transformNum = Number(transform.match(reg)[0]);
          if (transformNum - (index - ii) * 100 <= -200) {
            for (let i = 0, l = slotsLength; i < l; i++) {
              // slots[i].elm.style.opacity = 1;
              let transform = slots[i].elm.style.transform;
              let reg = /(-)?[0-9]+/g;
              let transformNum = Number(transform.match(reg)[0]);
              // let lastSlot = slots[slotsLength - 1].elm.style.transform;
              // let regExp = /[0-9]+/g;
              // let transformLastSlotNum = Number(lastSlot.match(regExp)[0]);
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
                slots[i].elm.style.transform = `translate(${
                  newTransformArr[0] + 100
                }%)`;
              }
              slots[ii].elm.style.transform = `translate(-${
                (index - ii) * 100
              }%)`;

              /* for (let i = 0, l = slotsLength; i < l; i++) {
            // slots[i].elm.style.opacity = 1;
            let transform = slots[i].elm.style.transform;
            let reg = /(-)?[0-9]+/g;
            let transformNum = Number(transform.match(reg)[0]);
            // let lastSlot = slots[slotsLength - 1].elm.style.transform;
            // let regExp = /[0-9]+/g;
            // let transformLastSlotNum = Number(lastSlot.match(regExp)[0]);
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
              slots[i].elm.style.transform = `translate(${
                newTransformArr[0] + 100
              }%)`;
            }
          } */
            }
          }
        }
      }
    },
    intervalChangeFunc(slots, slotsLength) {
      for (let i = 0, l = slotsLength; i < l; i++) {
        let transform = slots[i].elm.style.transform;
        let reg = /(-)?[0-9]+/g;
        let transformNum = Number(transform.match(reg)[0]);
        if (transformNum === 0) {
          this.currentIndex = i + 1;
          if (this.currentIndex === slotsLength) {
            this.currentIndex = 0;
          }
        }
        slots[i].elm.style.transform = `translate(${transformNum - 100}%)`;
      }

      for (let i = 0, l = slotsLength; i < l; i++) {
        // slots[i].elm.style.opacity = 1;
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
          slots[i].elm.style.transform = `translate(${
            newTransformArr[0] + 100
          }%)`;
        }
      }
    },
    leftBtn() {
      let slots = this.$slots.default;
      let slotsLength = slots.length;
      this.currentIndex -= 1;
      if (this.currentIndex < 0) {
        this.currentIndex = slotsLength - 1;
        clearInterval(this.timer);
        this.changefirst(this.currentIndex);
        this.timer = setInterval(() => {
          this.intervalChangeFunc(slots, slotsLength);
        }, this.interval);
      } else {
        clearInterval(this.timer);
        this.changefirst(this.currentIndex);
        this.timer = setInterval(() => {
          this.intervalChangeFunc(slots, slotsLength);
        }, this.interval);
      }
    },
    rightBtn() {
      let slots = this.$slots.default;
      let slotsLength = slots.length;
      this.currentIndex += 1;
      if (this.currentIndex > slotsLength - 1) {
        this.currentIndex = 0;
        clearInterval(this.timer);
        this.changefirst(this.currentIndex);
        this.timer = setInterval(() => {
          this.intervalChangeFunc(slots, slotsLength);
        }, this.interval);
      } else {
        clearInterval(this.timer);
        this.changefirst(this.currentIndex);
        this.timer = setInterval(() => {
          this.intervalChangeFunc(slots, slotsLength);
        }, this.interval);
      }
    },
  },
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

.vp-carousel-arrow-button,
.vp-carousel-arrow-aside-left,
.vp-carousel-arrow-aside-right {
  margin: 0;
  padding: 0;
  outline: none;
  border-radius: 0;
  background-color: transparent;
  line-height: inherit;
  width: max-content;
}
.vp-carousel-arrow-button::after,
.vp-carousel-arrow-aside-left::after,
.vp-carousel-arrow-aside-right::after {
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
.vp-carousel-arrow-aside-left,
.vp-carousel-arrow-aside-right {
  background-color: rgba(0, 0, 0, 0.6);
  width: 50px;
  height: 100px;
  border: none;
}
.vp-carousel-arrow-aside {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
}
.vp-carousel-arrow-aside-left,
.vp-carousel-arrow-aside-right {
  font-size: 50px;
  color: #ffffff;
}
</style>