<template>
  <li class="vp-submenu">
    <div class="vp-submenu-title" @click="submenuTitleHandle">
      <slot name="title"></slot>
      <span class="iconfont icon-xiangxia"></span>
    </div>
    <div v-show="isShowItem" class="vp-submenu-div">
      <ul class="vp-submenu-ul">
        <slot></slot>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  name: "VpSubmenu",
  provide() {
    return {
      VpSubmenu: this
    }
  },
  props: {
    index: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isShowItem: false,
    };
  },
  created() {},
  mounted() {
    let el = this.$el;
    let parentEle = el.parentElement;
    if (parentEle.className === "vp-menu-horizontal") {
      let vpSubmenuDiv = el.getElementsByClassName("vp-submenu-div");
      for(let i = 0,l = vpSubmenuDiv.length; i < l; i++) {
        if (i !== 0) {
          let parentfilterSubmenuDiv = vpSubmenuDiv[i].parentElement;
          parentfilterSubmenuDiv.style.position = "relative";
          vpSubmenuDiv[i].classList.add("vp-submenu-div-position");
        }
      }
    } else if (parentEle.className === "vp-menu-vertical") {
      let vpSubmenuDiv = el.getElementsByClassName("vp-submenu-div");
      for(let i = 0, l = vpSubmenuDiv.length; i < l; i++) {
        let vpSubmenuItems = vpSubmenuDiv[i].getElementsByClassName("vp-menu-item");
        let vpSubmenuTitles = vpSubmenuDiv[i].getElementsByClassName("vp-submenu-title");
        for (let itemIndex = 0, itemLength = vpSubmenuItems.length; itemIndex < itemLength; itemIndex ++) {
          vpSubmenuItems[itemIndex].setAttribute("style",  `padding: 0 ${30+(i+1)*7}px`);
        }
        for (let titleIndex = 0, titleLength = vpSubmenuTitles.length; titleIndex < titleLength; titleIndex ++) {
          vpSubmenuTitles[titleIndex].setAttribute("style",  `padding: 0 ${30+(i+1)*7}px`);
        }
      }
    }
  },
  methods: {
    submenuTitleHandle(e) {
      let spanEle = this.$el.childNodes[0].childNodes[1];
      let hasRotate = false;
      for (let k of spanEle.classList.values()) {
        if (k === "rotate") {
          hasRotate = true;
        }
      }

      if (hasRotate) {
        spanEle.classList.remove("rotate");
        this.isShowItem = false;
      } else {
        spanEle.classList.add("rotate");
        this.isShowItem = true;
      }
    },
  },
};
</script>
<style scoped>
.vp-submenu-title {
  padding: 0 30px;
  position: relative;
  line-height: 60px;
}
.vp-submenu-title span {
  position: absolute;
  right: 10px;
  display: inline-block;
  transition: all 1s;
}
.vp-submenu-title:hover {
  background-color: cadetblue;
  cursor: pointer;
}
.vp-submenu-div {
  position: relative;
  z-index: 100;
}
.rotate {
  animation: spanRotate 1s;
  animation-fill-mode: forwards;
}
@keyframes spanRotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
.vp-submenu-ul {
  /* position: absolute; */
  width: 100%;
  list-style: none;
  padding: 0;
  background-color: #545C64;
}

@keyframes animat {
  0% {
    height: 0px;
  }
  100% {
    height: auto;
  }
}
.vp-submenu-div-position {
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 0px;
  left: 100%;
}
</style>