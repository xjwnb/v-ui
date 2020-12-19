  ## vp-menu

| 属性名          | 类型   | 属性值                     | 描述         | 默认值       |
| --------------- | ------ | -------------------------- | ------------ | ------------ |
| mode            | String | "vertical" \| "horizontal" | 菜单方向模式 | "horizontal" |
| backgroundColor | String | "#xxx" \| "#xxxxxx"        | 菜单背景颜色 | ""           |
| textColor       | String | "#xxx" \| "#xxxxxx"        | 菜单文本颜色 | ""           |

| 事件名   | 描述     | 返回值           |
| -------- | -------- | ---------------- |
| selected | 选中事件 | index, indexPath |

  ## vp-submenu

| 属性名 | 类型   | 属性值 | 描述     | 默认值 |
| ------ | ------ | ------ | -------- | ------ |
| index  | String |        | 唯一标识 | ""     |

  ## vp-menu-item

| 属性名   | 类型    | 属性值        | 描述     | 默认值 |
| -------- | ------- | ------------- | -------- | ------ |
| index    | String  |               | 唯一标识 | ""     |
| disabled | Boolean | true \| false | 是否禁用 | false  |
