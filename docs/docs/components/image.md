  ## vp-image

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
