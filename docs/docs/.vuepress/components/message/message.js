import VpMessage from "./vp-message.vue";

const vpMessage = {};
vpMessage.install = Vue => {
  Vue.prototype.$message = function(option = {}) {
    let options = {
      message: (option && option.message) || "This is a message", // message 显示文本
      type: (option && option.type) || "info", // message 类型
      center: (option && option.center) || false, // 文本是否居中
      dangerouslyUseHTMLString:
        (option && option.dangerouslyUseHTMLString) || false, // 是否使用 HTML 文本
      showClose: (option && option.showClose) || false, // 是否显示关闭按钮
      iconClass: (option && option.iconClass) || "" // icon 类
    };

    let vpMessageInstance = Vue.extend(VpMessage);
    let messageEle = document.createElement("div");
    let vpmsg;
    Vue.nextTick(() => {
      vpmsg = new vpMessageInstance({
        propsData: {
          message: options.message,
          type: options.type,
          center: options.center,
          dangerouslyUseHTMLString: options.dangerouslyUseHTMLString,
          showClose: options.showClose,
          iconClass: options.iconClass
        }
      });
      vpmsg.$mount(messageEle);
      let el = vpmsg.$el;
      document.body.appendChild(el);
    });
  };
};

export default vpMessage;
