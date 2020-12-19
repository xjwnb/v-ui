
  ## vp-radio

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
