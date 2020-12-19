<template>
  <div :class="['vp-tag', `vp-tag-${effect}-${type}`]">
    <span><slot></slot></span>
    <span
      class="vp-tag-closable iconfont icon-guanbi"
      v-if="closable"
      @click="closeHandle"
    >
    </span>
  </div>
</template>

<script>
export default {
  name: "VpTag",
  props: {
    type: {
      type: String,
      default: "default",  // "success" | "info" | "warning" | "danger"
    },
    closable: {
      type: Boolean,
      default: false,
    },
    disableTransitions: {
      type: Boolean,
      default: true,
    },
    effect: {
      type: String,
      default: "light" // "light" | "dark"
    }
  },
  data() {
    return {
      closeTimer: null,
    };
  },
  created() {},
  mounted() {},
  methods: {
    closeHandle() {
      this.$emit("close");
      if (this.disableTransitions) {
        this.$el.classList.add("vp-tag-animation-close");
        this.closeTimer = window.setTimeout(() => {
          this.$el.remove();
        }, 1000);
      } else {
        this.$el.remove();
      }
    },
  },
  beforeDestroy() {
    window.clearTimeout(this.closeTimer);
  },
};
</script>
<style scoped>
.vp-tag {
  padding: 0 10px;
  display: inline-block;
  border-radius: 5px;
  height: 30px;
  line-height: 30px;
  transition: all 1s;
}
/* light */
.vp-tag-light-default {
  background-color: #ecf5ff;
  border: 1px solid #d9ecff;
  color: #409eff;
}
.vp-tag-light-success {
  background-color: #f0f9eb;
  border: 1px solid #e1f3d8;
  color: #67c23a;
}
.vp-tag-light-info {
  background-color: #f4f4f5;
  border: 1px solid #e1f3d8;
  color: #909399;
}
.vp-tag-light-warning {
  background-color: #fdf6ec;
  border: 1px solid #faecd8;
  color: #e6a23c;
}
.vp-tag-light-danger {
  background-color: #fef0f0;
  border: 1px solid #fde2e2;
  color: #f56c6c;
}
.vp-tag-closable {
  display: inline-block;
  line-height: 21px;
  font-size: 10px;
  margin-left: 10px;
  padding: 0 5px;
}

.vp-tag-light-default .vp-tag-closable:hover {
  color: #ffffff;
  border-radius: 30px;
  background-color: #409eff;
}
.vp-tag-light-success .vp-tag-closable:hover {
  color: #ffffff;
  border-radius: 30px;
  background-color: #67c23a;
}
.vp-tag-light-info .vp-tag-closable:hover {
  color: #ffffff;
  border-radius: 30px;
  background-color: #909399;
}
.vp-tag-light-warning .vp-tag-closable:hover {
  color: #ffffff;
  border-radius: 30px;
  background-color: #e6a23c;
}
.vp-tag-light-danger .vp-tag-closable:hover {
  color: #ffffff;
  border-radius: 30px;
  background-color: #f56c6c;
}
.vp-tag-animation-close {
  animation: closeAnimat 1s;
  animation-fill-mode: forwards;
}
@keyframes closeAnimat {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
/* dark */
.vp-tag-dark-default {
  background-color: #409eff;
  border: 1px solid #409eff;
  color: #ffffff;
}
.vp-tag-dark-success {
  background-color: #67c23a;
  border: 1px solid #67c23a;
  color: #ffffff;
}
.vp-tag-dark-info {
  background-color: #909399;
  border: 1px solid #909399;
  color: #ffffff;
}
.vp-tag-dark-warning {
  background-color: #e6a23c;
  border: 1px solid #e6a23c;
  color: #ffffff;
}
.vp-tag-dark-danger {
  background-color: #f56c6c;
  border: 1px solid #f56c6c;
  color: #ffffff;
}
.vp-tag-dark-default .vp-tag-closable:hover {
  color: #409eff;
  border-radius: 30px;
  background-color: #d9ecff;
}
.vp-tag-dark-success .vp-tag-closable:hover {
  color: #67c23a;
  border-radius: 30px;
  background-color: #e1f3d8;
}
.vp-tag-dark-info .vp-tag-closable:hover {
  color: #909399;
  border-radius: 30px;
  background-color: #e1f3d8;
}
.vp-tag-dark-warning .vp-tag-closable:hover {
  color: #e6a23c;
  border-radius: 30px;
  background-color: #faecd8;
}
.vp-tag-dark-danger .vp-tag-closable:hover {
  color: #f56c6c;
  border-radius: 30px;
  background-color: #fde2e2;
}
</style>