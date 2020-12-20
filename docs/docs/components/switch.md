# Switch 开关

## 基础用法

<template>
  <div class="switch-base">
    <vp-switch v-model="switchValue" @change="changeHandle" />
  </div>
</template>

```html
<vp-switch v-model="switchValue" @change="changeHandle" />

<script>
  export default {
    data() {
      return {
        switchValue: false,
      };
    },
    methods: {
      changeHandle(e) {
        console.log(e);
      },
    }
  };
</script>
```


## 禁用状态

<template>
  <div class="switch-base">
    <vp-switch v-model="switchValue1" disabled/>
  </div>
</template>

```html
<vp-switch v-model="switchValue1" disabled/>
```


<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
        switchValue: false,
        switchValue1: false
      };
    },
    methods: {
      changeHandle(e) {
        console.log(e);
      },
    }
  };
</script>

<!-- 样式 -->
<style>
.switch-base {
  padding: 20px;
  border: 1px solid #95a5a6;
  border-radius: 5px;
  display: flex;
}
.div-row {
  margin: 10px;
}
</style>



## Switch Attributes

| 属性名   | 类型    | 属性值        | 描述     | 默认值 |
| -------- | ------- | ------------- | -------- | ------ |
| value    | Boolean | true \| false | 开关值   | false  |
| disabled | Boolean | true \| false | 是否禁用 | false  |

| 事件名 | 描述       | 返回值 |
| ------ | ---------- | ------ |
| change | 修改时触发 | event  |
