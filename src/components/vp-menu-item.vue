<template>
  <!-- <template> -->
  <!-- <template> -->
  <li class="vp-menu-item" @click="vpMenuItemHandle"><slot></slot></li>
  <!-- </template> -->
  <!-- </template> -->
</template>

<script>
export default {
  name: "VpMenuItem",
  // inject: ['VpMenu', 'VpSubmenu'],
  inject: {
    VpMenu: {
      default: {}
    },
    VpSubmenu: {
      default: {}
    }
  },
  data() {
    return {
      // parentClassName: this.$parent.$el.className,
    };
  },
  created() {},
  mounted() {
    // console.log(this.$parent.$el.className);
    // let parentClassName = this.$parent.$el.className;
    // console.log(parentClassName);
  },
  methods: {
    vpMenuItemHandle(e) {
      let menu = this.VpMenu.$el;
      // console.log(e.srcElement.parentElement);
      let parentElement = e.srcElement.parentElement;
      // document.body.getElementsByClassName("test")[0].classList.remove("")
      let allli = menu.getElementsByClassName("vp-menu-item");
      allli.forEach((ele) => {
        ele.classList.remove("vp-menu-item-selected");
      });
      if (e.target.nodeName !== "LI") {
        let targetParent = e.target.parentElement;
        targetParent.parentElement
          .getElementsByClassName("vp-menu-item")
          .forEach((ele) => {
            ele.classList.remove("vp-menu-item-selected");
          });
        targetParent.classList.add("vp-menu-item-selected");
      }
      e.srcElement.classList.add("vp-menu-item-selected");
    },
  },
};
</script>
<style scoped>
.vp-menu-item {
  padding: 0 30px;
}
.vp-menu-item:hover {
  background-color: cadetblue;
  cursor: pointer;
}
.vp-menu-item-selected {
  /* background-color: cornflowerblue; */
  color: #FFD04B;
  border-bottom: 3px solid #FFD04B;
}
.vp-menu-item a {
  text-decoration: none;
}
.vp-menu-item a {
  color: inherit;
  text-decoration: none;
  display: block;
  border: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
}
.vp-menu-item a,
.vp-menu-item a:hover,
.vp-menu-item a:active,
.vp-menu-item a:visited,
.vp-menu-item a:link,
.vp-menu-item a:focus {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  outline: none;
  background: none;
  text-decoration: none;
}
::selection {
  background: #fff;
  color: #333;
}
::-moz-selection {
  background: #fff;
  color: #333;
}
::-webkit-selection {
  background: #fff;
  color: #333;
}
</style>