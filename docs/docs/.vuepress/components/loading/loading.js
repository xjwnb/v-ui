import Vue from "vue";
import VpLoading from "./vp-loading.vue";

let loading = {};

loading.install = Vue => {
  Vue.prototype.$loading = function(option = {}) {
    let options = {
      ele: option && option.ele || document.body,
      message: option && option.message || "loading...",
      color: option && option.color || "#000000",
      iconfont: option && option.iconfont || "",
      backgroundColor: option && option.backgroundColor || "rgba(44, 62, 80, .7)" // 建议使用 rgba 格式，并设置透明度
    }
    let vploadingInstance = Vue.extend(VpLoading);
    let vploading
    let loadingEle = document.createElement("div");
    let loadEle;
    Vue.nextTick().then(() => {
      vploading = new vploadingInstance({
        propsData: {
          message: options.message,
          iconfont: options.iconfont
        }
      });
      vploading.$mount(loadingEle);
      let el = vploading.$el;
      loadEle = options.ele;
      if (loadEle !== document.body) {
        loadEle.setAttribute("style", "position: relative");
        el.setAttribute("style", "position: absolute; top: 0; right: 0; left: 0; bottom: 0")
      }
      el.style.color = options.color;
      el.style.backgroundColor = options.backgroundColor;

      loadEle.appendChild(el);
    });

    return {
      close: () => {
        vploading.$el.remove();
      }
    };
  };
};

export default loading;
