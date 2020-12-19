
<template>
  <div :class="['vp-message', `vp-message-${type}`, isCenter]">
    <span :class="['iconfont', `icon-${iconClass ? iconClass : type}`]"></span
    ><span v-if="!dangerouslyUseHTMLString">{{ message }}</span>
    <span v-if="dangerouslyUseHTMLString" v-html="message"></span>
    <span v-if="showClose" class="vp-message-close iconfont icon-clear_circle_outlined"
      @click="closeMsgHandle"></span>
  </div>
</template>

<script>
export default {
  name: "VpMessage",
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String, // "info"|"success"|"warn"|"error"
      default: "",
    },
    iconClass: {
      type: String,
    },
    center: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    isCenter() {
      return this.center ? 'vp-message-center' : '';
    }
  },
  created() {},
  mounted() {
    this.timer = window.setTimeout(() => {
      this.$el.remove();
    }, 3000);
  },
  methods: {
    // 点击关闭 message
    closeMsgHandle() {
      this.$el.remove();
      this.$emit("close", this.$el);
    }
  },
  destroyed() {
    clearTimeout(timer);
    this.$emit("close", this.$el);
  },
};
</script>
<style scoped>
.vp-message {
  padding: 1rem 2rem;
  width: 250px;
  border-radius: 5px;
  transition: all 1s;
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  animation: animat 1s;
}
@keyframes animat {
  0% {
    top: -60px;
  }
  100% {
    top: 30px;
  }
}
.vp-message-info {
  background-color: #edf2fc;
  color: #909399;
}
.vp-message-success {
  background-color: #f0f9eb;
  color: #67c23a;
}
.vp-message-warn {
  background-color: #fdf6ec;
  color: #e6a23c;
}
.vp-message-error {
  background-color: #fef0f0;
  color: #f56c6c;
}
.iconfont {
  margin-right: 5px;
}
.vp-message-center {
  text-align: center;
}
.vp-message-close {
  cursor: pointer;
  position: absolute;
  left: 280px;
  top: 20px;
}
</style>