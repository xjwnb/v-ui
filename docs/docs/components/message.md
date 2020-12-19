 ## 消息提示 Message

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
