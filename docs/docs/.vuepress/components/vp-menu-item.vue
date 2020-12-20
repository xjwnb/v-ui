<template>
  <li class="vp-menu-item" @click="clickHandle" :class="disabled ? 'vp-menu-item-disabled' : ''"><slot></slot></li>
</template>

<script>
export default {
  name: "VpMenuItem",
  // inject: ['VpMenu', 'VpSubmenu'],
  inject: {
    VpMenu: {
      default: {},
    },
    VpSubmenu: {
      default: {},
    },
  },
  props: {
    index: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // parentClassName: this.$parent.$el.className,
    };
  },
  computed: {
    clickHandle() {
      // return this.disabled ? '' : this.vpMenuItemHandle;
      if (!this.disabled) {
        return this.vpMenuItemHandle;
      } else {
        return this.disabledHandle;
      }
    }
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

      // 获取 index
      let parentEle = this.$parent;
      let indexPath = [];
      while (true) {
        if (parentEle === this.VpMenu) {
          indexPath.push(this.index);
          parentEle._data.selectedItemFunc(this.index, indexPath);
          break;
        } else {
          indexPath.unshift(parentEle.index);
          parentEle = parentEle.$parent;
        }
      }
    },
    disabledHandle(e) {
      e.preventDefault();
    }
  },
};
</script>
<style scoped>
.vp-menu-item {
  padding: 0 30px;
  line-height: 60px;
}
.vp-menu-item:hover {
  background-color: cadetblue;
  cursor: pointer;
}
.vp-menu-item-selected {
  /* background-color: cornflowerblue; */
  color: #ffd04b;
  border-bottom: 3px solid #ffd04b;
}


.vp-menu-item-disabled {
  color: #ECECED;
  cursor: not-allowed;
}
.vp-menu-item-disabled:hover {
  background-color: "";
  cursor: not-allowed;

}







/* 清除 a 标签默认样式 */
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