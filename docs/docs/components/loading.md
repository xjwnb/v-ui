
  ## 加载 Loaidng
  使用方法 

  Vue.use("loading.vue");

  this.$loading(option: Object): Object -> close();

  option 属性：

| 属性名          | 类型    | 描述                                         | 默认值                 |
| --------------- | ------- | -------------------------------------------- | ---------------------- |
| ele             | DOM元素 | 要添加加载的DOM元素                          | document.body          |
| message         | String  | 加载显示的文本                               | "loading..."           |
| color           | String  | 加载显示文本颜色                             | "#000000"              |
| iconfont        | String  | 加载文本前方显示的 iconfont 类名("icon-xxx") | ""                     |
| backgroundColor | String  | 加载背景颜色（建议使用 rgba）                | "rgba(44, 62, 80, .7)" |
