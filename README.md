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
  | blur   | 取消焦点事件 | event  |
  | focus  | 获得焦点事件 | event  |

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

  

