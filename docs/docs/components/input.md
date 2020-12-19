
  ## vp-input

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
