# vpro-ui
> 组件库
## 组件

- 按钮  Button

  vp-button

  | 属性名   | 类型    | 属性值                                                       | 描述        | 默认值    |
  | -------- | ------- | ------------------------------------------------------------ | ----------- | --------- |
  | type     | string  | "default" \| "primary" \| "success" \| "info" \| "warning" \| "danger" | button类型  | "default" |
  | round    | boolean | true \| false                                                | 是否圆角    | true      |
  | icon     | string  | icon类名                                                     | button icon |           |
  | disabled | boolean | true \| false                                                | 是否禁用    | false     |

  | 事件名 | 描述            | 返回值 |
  | ------ | --------------- | ------ |
  | click  | button 点击事件 | event  |

  

- 输入框 Input

  vp-input

  | 属性名      | 类型    | 属性值                             | 描述              | 默认值 |
  | ----------- | ------- | ---------------------------------- | ----------------- | ------ |
  | type        | string  | "text" \| "password" \| "textarea" | input 类型        | "text" |
  | placeholder | string  |                                    | 提示文本          | ""     |
  | v-model     | any     |                                    | 值                | ""     |
  | disabled    | boolean | true \| false                      | 是否禁止          | false  |
  | clearable   | boolean | true \| false                      | 是否可清除        | false  |
  | cols        | number  |                                    | textarea 列数     | 20     |
  | rows        | number  |                                    | textarea 行数     | 5      |
  | readonly    | boolean | true \| false                      | textarea 是否只读 | false  |
  | maxlength   | number  |                                    | textarea 最大数   | 100    |

  | 事件名 | 描述         | 返回值 |
  | ------ | ------------ | ------ |
  | blur   | 取消焦点触发 | event  |
  | focus  | 获得焦点触发 | event  |
  | input  | 输入时触发   | value  |

- 单选框 Radio

  vp-radio

  | 属性名   | 类型                        | 属性值        | 描述                             | 默认值 |
  | -------- | --------------------------- | ------------- | -------------------------------- | ------ |
  | v-model  | any                         |               | 双向绑定                         | ""     |
  | label    | string \| number \| boolean |               | 单选框对应的值（原生中的 value） | ""     |
  | disabled | boolean                     | true \| false | 是否禁用                         | false  |
  | border   | boolean                     | true \| false | 是否有边框                       | false  |

  | 事件名 | 描述             | 返回值 |
  | ------ | ---------------- | ------ |
  | change | 修改单选框时触发 | event  |

  

- 单选框 group - vp-radio-group （需和 vp-radio 一起使用）

  | 属性名  | 类型 | 属性值 | 描述     | 默认值 |
  | ------- | ---- | ------ | -------- | ------ |
  | v-model | any  |        | 双向绑定 | ""     |

- 表单 Form

  vp-form

  | 属性名 | 类型   | 属性值 | 描述                               | 默认值 |
  | ------ | ------ | ------ | ---------------------------------- | ------ |
  | model  | Object |        | 表单对象默认值                     | {}     |
  | rules  | Object |        | 表单验证规则（目前只支持required） |        |

  vp-form-item

  | 属性名     | 类型   | 属性值                     | 描述         | 默认值  |
  | ---------- | ------ | -------------------------- | ------------ | ------- |
  | label      | String |                            | 表单标签     | ""      |
  | labelWidth | Number |                            | 表单标签宽度 | 100     |
  | labelStyle | String | "right" \| "left" \| "top" | 表单标签位置 | "right" |
  | prop       | String |                            | 表单验证名称 |         |

  **表单验证方法**：

  validate(callback(isValid))

  在表单（vp-form）添加 ref 属性，并进行表单校验。

  例子:

  ```javascript
  let form = this.$refs.form;
  form.validate((valid) => {
    if (valid) {
      console.log("校验成功！");
    } else {
      console.log("校验失败！");
    }
  });
  ```

- 布局容器 Container 

  1. 父容器：vp-container
  2. 头部容器：vp-header
  3. 内容容器：vp-main
  4. 侧边容器：vp-aside
  5. 底部容器：vp-footer

- 多选框 Checkbox

  vp-checkbox-group （要和 vp-checkbox 一起用）

  | 属性名  | 类型  | 属性值 | 描述               | 默认值 |
  | ------- | ----- | ------ | ------------------ | ------ |
  | v-model | Array |        | 多选框内容双向绑定 | []     |

  vp-checkbox

  | 属性名   | 类型    | 属性值        | 描述               | 默认值 |
  | -------- | ------- | ------------- | ------------------ | ------ |
  | v-model  | Boolean | true \| false | 多选框内容双向绑定 | false  |
  | label    | String  |               | 多选框标签内容     | ""     |
  | disabled | Boolean | true \| false | 是否禁用           | false  |

- 加载 Loading （插件 plugin）

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

- 图片 Image

  vp-image

  | 属性名     | 类型    | 属性值                                           | 描述           | 默认值  |
  | ---------- | ------- | ------------------------------------------------ | -------------- | ------- |
  | src        | String  |                                                  | 图片地址       | ""      |
  | alt        | String  |                                                  | 图片代替文本   | ""      |
  | width      | String  |                                                  | 图片宽度       | "300px" |
  | height     | String  |                                                  | 图片高度       | "200px" |
  | lazy       | Boolean | true \| false                                    | 是否懒加载     | false   |
  | fit        | String  | "fill"\|"contain"\|"cover"\|"none"\|"scale-down" | 原生object-fit | "fill"  |
  | previewSrc | String  |                                                  | 图片地址       | ""      |

  | 事件名 | 描述       | 返回值 |
  | ------ | ---------- | ------ |
  | load   | 懒加载成功 | event  |
  | error  | 懒加载失败 | event  |

- 消息提示 Message（插件 plugin）

  | 属性名                   | 类型    | 属性值                             | 描述                           | 默认值              |
  | ------------------------ | ------- | ---------------------------------- | ------------------------------ | ------------------- |
  | message                  | String  |                                    | 消息提示文本                   | "This is a message" |
  | type                     | String  | "info"\|"success"\|"warn"\|"error" | 消息类型                       | "info"              |
  | iconClass                | String  |                                    | 自定义提示文本前面的 icon 类   | ""                  |
  | center                   | Boolean | true \| false                      | 文本是否居中                   | false               |
  | showClose                | Boolean | true \| false                      | 是否显示关闭按钮               | false               |
  | dangerouslyUseHTMLString | Boolean | true \| false                      | message 属性是否支持 HTML 文本 | false               |

  | 事件名 | 描述                       | 返回值                     |
  | ------ | -------------------------- | -------------------------- |
  | close  | message 插件关闭后触发事件 | message DOM元素（this.$el) |

- 导航菜单 NavMenu

  组件：vp-menu、vp-submenu、vp-menu-item

  vp-menu

  | 属性名          | 类型   | 属性值                     | 描述         | 默认值       |
  | --------------- | ------ | -------------------------- | ------------ | ------------ |
  | mode            | String | "vertical" \| "horizontal" | 菜单方向模式 | "horizontal" |
  | backgroundColor | String | "#xxx" \| "#xxxxxx"        | 菜单背景颜色 | ""           |
  | textColor       | String | "#xxx" \| "#xxxxxx"        | 菜单文本颜色 | ""           |

  | 事件名   | 描述     | 返回值           |
  | -------- | -------- | ---------------- |
  | selected | 选中事件 | index, indexPath |

  vp-submenu

  | 属性名 | 类型   | 属性值 | 描述     | 默认值 |
  | ------ | ------ | ------ | -------- | ------ |
  | index  | String |        | 唯一标识 | ""     |

  vp-menu-item

  | 属性名   | 类型    | 属性值        | 描述     | 默认值 |
  | -------- | ------- | ------------- | -------- | ------ |
  | index    | String  |               | 唯一标识 | ""     |
  | disabled | Boolean | true \| false | 是否禁用 | false  |

- 文字提示 Tooltip

  vp-tooltip

  | 属性名    | 类型   | 属性值                           | 描述         | 默认值    |
  | --------- | ------ | -------------------------------- | ------------ | --------- |
  | placement | String | "top"\|"bottom"\|"left"\|"right" | 位置方向     | "top"     |
  | content   | String |                                  | 文字提示内容 | "tooltip" |

- 分割线 Divider

  vp-divider

  | 属性名          | 类型   | 属性值                        | 描述       | 默认值       |
  | --------------- | ------ | ----------------------------- | ---------- | ------------ |
  | color           | String | "#xxx" \| "#xxxxxx"           | 分割线颜色 | "#dcdfe6"    |
  | direction       | String | "horizontal" \| "vertical"    | 分割线方向 | "horizontal" |
  | contentPosition | String | "center" \| "left" \| "right" | 内容方向   | "center"     |

- 置顶 BackTop

  vp-backtop

  | 属性名           | 类型   | 属性值                    | 描述               | 默认值 |
  | ---------------- | ------ | ------------------------- | ------------------ | ------ |
  | target           | String | ".className" \| "#IDName" | 置顶目标           | body   |
  | visibilityHeight | Number |                           | 滚动多少高度显示   | 200    |
  | right            | Number |                           | 距离浏览器右边距离 | 50     |
  | bottom           | Number |                           | 距离浏览器下边距离 | 100    |

  | 事件名  | 描述           | 返回值                    |
  | ------- | -------------- | ------------------------- |
  | click   | 点击时触发     | event，target（触发目标） |
  | backtop | 到达目标时触发 | event，target（触发目标） |

- 进度条 Progress

  vp-progress

  | 属性名      | 类型          | 属性值                                                   | 描述             | 默认值 |
  | ----------- | ------------- | -------------------------------------------------------- | ---------------- | ------ |
  | strokeWidth | Number        |                                                          | 进度条宽度       | 10     |
  | percentage  | Number        |                                                          | 进度条数字百分比 | 0      |
  | status      | String        | "success"\|"warning"\|"exception"                        | 进度条状态       | ""     |
  | color       | String\|Array | 例如 "#000000" \| [{ color: "#000000", percentage: 20 }] | 颜色规则         | ""     |
  | textInside  | Boolean       | true \| false                                            | 文本是否在内部   | false  |

- 表格 Table

  vp-table

  | 属性名 | 类型    | 属性值        | 描述         | 默认值 |
  | ------ | ------- | ------------- | ------------ | ------ |
  | data   | Array   |               | 表格数据数组 |        |
  | stripe | Boolean | true \| false | 是否为斑马纹 | false  |

  vp-table-column

  | 属性名 | 类型   | 属性值 | 描述               | 默认值 |
  | ------ | ------ | ------ | ------------------ | ------ |
  | prop   | String |        | 对应列内容的字段名 | ""     |
  | label  | String |        | 对应列内容的标签名 | ""     |

  

