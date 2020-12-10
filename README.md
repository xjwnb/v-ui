# vpro-ui
> 组件库
## 组件

- 按钮 - vp-button

  | 属性名   | 类型    | 属性值                                                       | 描述        | 默认值    |
  | -------- | ------- | ------------------------------------------------------------ | ----------- | --------- |
  | type     | string  | "default" \| "primary" \| "success" \| "info" \| "warning" \| "danger" | button类型  | "default" |
  | round    | boolean | true \| false                                                | 是否圆角    | true      |
  | icon     | string  | icon类名                                                     | button icon |           |
  | disabled | boolean | true \| false                                                | 是否禁用    | false     |

  | 事件名 | 描述            | 返回值 |
  | ------ | --------------- | ------ |
  | click  | button 点击事件 | event  |

  

- 输入框 -vp-input

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

- 单选框 - vp-radio

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

- 表单 - vp-form

  | 属性名 | 类型   | 属性值 | 描述                               | 默认值 |
  | ------ | ------ | ------ | ---------------------------------- | ------ |
  | model  | object |        | 表单对象默认值                     | {}     |
  | rules  | object |        | 表单验证规则（目前只支持required） |        |

  vp-form-item

  | 属性名     | 类型   | 属性值                     | 描述         | 默认值  |
  | ---------- | ------ | -------------------------- | ------------ | ------- |
  | label      | string |                            | 表单标签     | ""      |
  | labelWidth | number |                            | 表单标签宽度 | 100     |
  | labelStyle | string | "right" \| "left" \| "top" | 表单标签位置 | "right" |
  | prop       | string |                            | 表单验证名称 |         |

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

- 布局容器：container 

  1. 父容器：vp-container
  2. 头部容器：vp-header
  3. 内容容器：vp-main
  4. 侧边容器：vp-aside
  5. 底部容器：vp-footer

