
# Message 消息提示

## 基础用法

<template>
  <div class="div-base">
    <vp-button @click="messageHandle">Info message</vp-button>
    <vp-button @click="messageSuccessHandle">Success message</vp-button>
    <vp-button @click="messageWarnHandle">Warn message</vp-button>
    <vp-button @click="messageErrorHandle">Error message</vp-button>
  </div>
</template>

```html
<vp-button @click="messageHandle">Info message</vp-button>
<vp-button @click="messageSuccessHandle">Success message</vp-button>
<vp-button @click="messageWarnHandle">Warn message</vp-button>
<vp-button @click="messageErrorHandle">Error message</vp-button>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      messageHandle() {
        this.$message({
          message: "小卡车加油！"
        });
      },
      messageSuccessHandle() {
        this.$message({
          type: "success",
          message: "小卡车加油！",
        });
      },
      messageWarnHandle() {
        this.$message({
          type: "warn",
          message: "小卡车加油！"
        });
      },
      messageErrorHandle() {
        this.$message({
          type: "error",
          message: "小卡车加油！"
        });
      },
    }
  };
</script>
```


<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      messageHandle() {
        this.$message({
          message: "小卡车加油！"
        });
      },
      messageSuccessHandle() {
        this.$message({
          type: "success",
          message: "小卡车加油！",
        });
      },
      messageWarnHandle() {
        this.$message({
          type: "warn",
          message: "小卡车加油！"
        });
      },
      messageErrorHandle() {
        this.$message({
          type: "error",
          message: "小卡车加油！"
        });
      },
    }
  };
</script>

<!-- 样式 -->
<style>
.div-base {
  padding: 20px;
  border: 1px solid #95a5a6;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  
}
.div-row {
  margin: 10px;
  width: 100%;

}
</style>


  ## Message Attributes

| 属性名                   | 类型    | 属性值                             | 描述                           | 默认值              |
| ------------------------ | ------- | ---------------------------------- | ------------------------------ | ------------------- |
| message                  | String  |                                    | 消息提示文本                   | "This is a message" |
| type                     | String  | "info"\|"success"\|"warn"\|"error" | 消息类型                       | "info"              |
| iconClass                | String  |                                    | 自定义提示文本前面的 icon 类   | ""                  |
| center                   | Boolean | true \| false                      | 文本是否居中                   | false               |
| showClose                | Boolean | true \| false                      | 是否显示关闭按钮               | false               |
| dangerouslyUseHTMLString | Boolean | true \| false                      | message 属性是否支持 HTML 文本 | false               |


  ## Message Events
| 事件名 | 描述                       | 返回值                     |
| ------ | -------------------------- | -------------------------- |
| close  | message 插件关闭后触发事件 | message DOM元素（this.$el) |
