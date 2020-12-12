<template>
  <div class="vp-image">
    <template v-show="lazy ? (isLoad ? true : false) : true">
      <img
        @click="clickImg"
        :class="['vp-image-inner']"
        :style="{ objectFit: fit }"
        :src="lazy ? '' : src"
        :alt="alt"
        :width="width"
        :height="height"
        :data-src="lazy ? src : ''"
      />
    </template>
    <template v-if="isShowLoading">
      <div class="vp-image-loading">
        <div class="" :style="vpImageErrorStyle">
          <span class="vp-image-error-span">
            <slot name="loading">loading...</slot>
          </span>
        </div>
      </div>
    </template>
    <template v-if="isShowPreview">
      <div class="vp-image-preview-src-list">
        <span class="iconfont icon-guanbi" @click="closePreviewHandle"></span>
        <div class="vp-image-preview-src">
          <img
            class="vp-image-preview-src-inner"
            :src="previewSrc"
            :alt="alt"
          />
        </div>
        <div class="vp-image-preview-control">
          <div class="vp-image-small">
            <span
              class="iconfont icon-suoxiao"
              @click="smallPreviewHandle"
            ></span>
          </div>
          <div class="vp-image-big">
            <span class="iconfont icon-fangda" @click="bigPreviewHandle"></span>
          </div>
          <div class="vp-image-left-rotate">
            <span
              class="iconfont icon-zuozhuan"
              @click="leftRotatePreviewHandle"
            ></span>
          </div>
          <div class="vp-image-right-rotate">
            <span
              class="iconfont icon-youzhuan"
              @click="rightRotatePreviewHandle"
            ></span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "VpImage",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "300px",
    },
    height: {
      type: String,
      default: "200px",
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    fit: {
      type: String, // "fill" | "contain" | "cover" | "none" | "scale-down"
      default: "fill",
    },
    previewSrc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isLoad: false,
      vpImageErrorStyle: {
        position: "absolute",
        zIndex: 2,
        top: "-" + this.height,
        boxSizing: "border-box",
        backgroundColor: "#f5f7fa",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: this.width,
        height: this.height,
      },
      fitStyle: {
        objectFit: this.fit,
      },
      isShowPreview: false,
    };
  },
  computed: {
    isShowLoading() {
      if (this.lazy && !this.isLoad) {
        return true;
      } else if (!this.lazy && !this.isLoad) {
        return false;
      }
    },
  },
  created() {},
  mounted() {
    let imgEle = this.$el.firstElementChild;
    if (!!imgEle.getAttribute("data-src")) {
      if (this.lazy) {
        this.lazyImg(imgEle);
        window.addEventListener(
          "scroll",
          this.debounce(this.windowScroll, 500)
        );
      }
    }
  },
  methods: {
    /***
     *  实现图片懒加载
     * @param {Element} 懒加载元素
     */
    lazyImg(ele) {
      if (ele.getAttribute("data-src")) {
        let _this = this;
        let h = window.innerHeight;
        let offsetTop = ele.offsetTop;
        let scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (offsetTop - scrollTop < h) {
          let src = ele.dataset.src;
          let img = new Image();
          img.src = src;
          img.onload = function (e) {
            ele.src = src;
            ele.setAttribute("data-src", "");
            _this.isLoad = true;
            console.log(e);
            _this.$emit("load", e);
          };
          img.onerror = function (e) {
            _this.$emit("error", e);
          }
        }
      }
    },
    // 滚动事件
    windowScroll() {
      this.lazyImg(this.$el.firstElementChild);
    },
    // 防抖
    debounce(fn, wait) {
      let timer = null;
      return function () {
        if (timer !== null) clearInterval(timer);
        timer = setTimeout(fn, wait);
      };
    },
    // 点击图片查看预览
    clickImg() {
      this.previewSrc ? (this.isShowPreview = true) : null;
    },
    // 关闭图片预览
    closePreviewHandle() {
      this.isShowPreview = false;
    },
    // 缩小图片预览
    smallPreviewHandle() {
      let imgPreview = document.getElementsByClassName(
        "vp-image-preview-src-inner"
      )[0];
      this.imgPreviewControlHandle("getSmall", imgPreview);
      /* let imgPreview = document.getElementsByClassName(
        "vp-image-preview-src-inner"
      )[0];
      let imgWidth = imgPreview.width;
      let imgHeight = imgPreview.height;
      if (imgWidth > 300) {
        imgPreview.style.width = `${imgWidth * 0.8}px`;
        imgPreview.style.height = `${imgHeight * 0.8}px`;
      } */
    },
    // 放大图片预览
    bigPreviewHandle() {
      let imgPreview = document.getElementsByClassName(
        "vp-image-preview-src-inner"
      )[0];
      this.imgPreviewControlHandle("getBig", imgPreview);
      /* let imgPreview = document.getElementsByClassName(
        "vp-image-preview-src-inner"
      )[0];
      let imgWidth = imgPreview.width;
      let imgHeight = imgPreview.height;
      if (imgWidth < 2000) {
        imgPreview.style.width = `${imgWidth * 1.2}px`;
        imgPreview.style.height = `${imgHeight * 1.2}px`;
      } */
    },
    // 左转图片预览
    leftRotatePreviewHandle() {
      let imgPreview = document.getElementsByClassName(
        "vp-image-preview-src-inner"
      )[0];
      this.imgPreviewControlHandle("leftRotate", imgPreview);
      /* let imgPreview = document.getElementsByClassName(
        "vp-image-preview-src-inner"
      )[0];
      let transformImg = imgPreview.style.transform;
      if (!transformImg) {
        imgPreview.style.transform = "rotate(-90deg)";
      } else {
        let reg = /(?<=(rotate\(-))[0-9]+/;
        if (transformImg.match(reg)) {
          let rotateDeg = transformImg.match(reg)[0];
          imgPreview.style.transform = `rotate(-${Number(rotateDeg) + 90}deg)`;
        } else {
          let reg = /(?<=(rotate\())[0-9]+/;
          let rotateDeg = transformImg.match(reg)[0];
          imgPreview.style.transform = `rotate(${Number(rotateDeg) - 90}deg)`;
        }
      } */
    },
    // 右转图片预览
    rightRotatePreviewHandle() {
      let imgPreview = document.getElementsByClassName(
        "vp-image-preview-src-inner"
      )[0];
      this.imgPreviewControlHandle("rightRotate", imgPreview);
      /* let imgPreview = document.getElementsByClassName(
        "vp-image-preview-src-inner"
      )[0];
      let transformImg = imgPreview.style.transform;
      if (!transformImg) {
        imgPreview.style.transform = "rotate(90deg)";
      } else {
        let reg = /(?<=(rotate\())[0-9]+/;
        if (transformImg.match(reg)) {
          let rotateDeg = transformImg.match(reg)[0];
          imgPreview.style.transform = `rotate(${Number(rotateDeg) + 90}deg)`;
        } else {
          let reg = /(?<=(rotate\(-))[0-9]+/;
          let rotateDeg = transformImg.match(reg)[0];
          imgPreview.style.transform = `rotate(${-Number(rotateDeg) + 90}deg)`;
        }
      } */
    },
    /**
     * 修改元素动作
     * @param {String} actionType 修改类型："getSmall"|"getBig"|"leftRotate"|"leftRotate"
     * @param {Element} imgEle 修改的元素对象
     */
    imgPreviewControlHandle(actionType, imgEle) {
      switch (actionType) {
        case "getSmall":
          let getSmallImgWidth = imgEle.width;
          let getSmallImgHeight = imgEle.height;
          if (getSmallImgWidth > 300) {
            imgEle.style.width = `${getSmallImgWidth * 0.8}px`;
            imgEle.style.height = `${getSmallImgHeight * 0.8}px`;
          }
          break;
        case "getBig":
          let getBigImgWidth = imgEle.width;
          let getBigImgHeight = imgEle.height;
          if (getBigImgWidth < 2000) {
            imgEle.style.width = `${getBigImgWidth * 1.2}px`;
            imgEle.style.height = `${getBigImgHeight * 1.2}px`;
          }
          break;
        case "leftRotate":
          let leftRotateTransformImg = imgEle.style.transform;
          if (!leftRotateTransformImg) {
            imgEle.style.transform = "rotate(-90deg)";
          } else {
            let reg = /(?<=(rotate\(-))[0-9]+/;
            if (leftRotateTransformImg.match(reg)) {
              let leftRotateDeg = leftRotateTransformImg.match(reg)[0];
              imgEle.style.transform = `rotate(-${
                Number(leftRotateDeg) + 90
              }deg)`;
            } else {
              let reg = /(?<=(rotate\())[0-9]+/;
              let rotateDeg = leftRotateTransformImg.match(reg)[0];
              imgEle.style.transform = `rotate(${Number(rotateDeg) - 90}deg)`;
            }
          }
          break;
        case "rightRotate":
          let transformImg = imgEle.style.transform;
          if (!transformImg) {
            imgEle.style.transform = "rotate(90deg)";
          } else {
            let reg = /(?<=(rotate\())[0-9]+/;
            if (transformImg.match(reg)) {
              let rotateDeg = transformImg.match(reg)[0];
              imgEle.style.transform = `rotate(${Number(rotateDeg) + 90}deg)`;
            } else {
              let reg = /(?<=(rotate\(-))[0-9]+/;
              let rotateDeg = transformImg.match(reg)[0];
              imgEle.style.transform = `rotate(${-Number(rotateDeg) + 90}deg)`;
            }
          }
      }
    },
  },
};
</script>
<style scoped>
.vp-image {
  display: inline-block;
}
.vp-image-loading {
  position: relative;
}
.vp-image-error {
  position: absolute;
  z-index: 2;
  top: 200px;
  box-sizing: border-box;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vp-image-error-span {
  transform: translateX(-50%);
}
/* 预览 */
.vp-image-preview-src-list {
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.vp-image-preview-src {
  position: absolute;
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.vp-image-preview-src-inner {
  transition: all 0.5s;
}
.icon-guanbi {
  position: fixed;
  z-index: 999;
  top: 50px;
  right: 50px;
  cursor: pointer;
}
.vp-image-preview-control {
  display: flex;
  border-radius: 50px;
  padding: 0 30px;
  width: 200px;
  height: 50px;
  background-color: rgba(63, 61, 61, 0.7);
  color: #f5f7fa;
  justify-content: space-around;
  line-height: 50px;
  position: fixed;
  z-index: 5;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>