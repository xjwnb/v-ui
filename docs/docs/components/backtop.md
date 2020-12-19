  ## vp-backtop

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
