# 单选框 Radio

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
    <vp-radio v-model="radio1" label="A">A</vp-radio>
    <vp-radio v-model="radio1" label="B">B</vp-radio>
    <vp-radio v-model="radio1" label="C">C</vp-radio>
    <vp-radio v-model="radio1" label="D">D</vp-radio>
    </div>
  </div>
</template>

```html
<vp-radio v-model="radio1" label="A">A</vp-radio>
<vp-radio v-model="radio1" label="B">B</vp-radio>
<vp-radio v-model="radio1" label="C">C</vp-radio>
<vp-radio v-model="radio1" label="D">D</vp-radio>
```



## 禁用状态
<template>
  <div class="div-base">
    <div class="div-row">
      <vp-radio label="E" disabled>E</vp-radio>
    </div>
  </div>
</template>

```html
<vp-radio label="E" disabled>E</vp-radio>
```



## Radio Group
<template>
  <div class="div-base">
    <div class="div-row">
      <vp-radio-group v-model="radio2">
        <vp-radio label="F">F</vp-radio>
        <vp-radio label="G">G</vp-radio>
        <vp-radio label="H">H</vp-radio>
        <vp-radio label="I">I</vp-radio>
      </vp-radio-group>
    </div>
  </div>
</template>

```html
<vp-radio-group v-model="radio2">
  <vp-radio label="F">F</vp-radio>
  <vp-radio label="G">G</vp-radio>
  <vp-radio label="H">H</vp-radio>
  <vp-radio label="I">I</vp-radio>
</vp-radio-group>

<script>
  export default {
    data() {
      return {
        radio2: "F"
      };
    },
    methods: {
      
    }
  };
</script>
```


<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
        radio1: "A",
        radio2: "F"
      };
    },
    methods: {
      
    }
  };
</script>

<!-- 样式 -->
<style>
.div-base {
  padding: 20px;
  border: 1px solid #95a5a6;
  border-radius: 5px;
}
.div-row {
  margin: 10px;
}
</style>

## Radio Attributes

| 属性名   | 类型                        | 属性值        | 描述                             | 默认值 |
| -------- | --------------------------- | ------------- | -------------------------------- | ------ |
| v-model  | any                         |               | 双向绑定                         | ""     |
| label    | string \| number \| boolean |               | 单选框对应的值（原生中的 value） | ""     |
| disabled | boolean                     | true \| false | 是否禁用                         | false  |
| border   | boolean                     | true \| false | 是否有边框                       | false  |

## Radio Events

| 事件名 | 描述             | 返回值 |
| ------ | ---------------- | ------ |
| change | 修改单选框时触发 | event  |


## Radio-Group Attributes

  | 属性名  | 类型 | 属性值 | 描述     | 默认值 |
  | ------- | ---- | ------ | -------- | ------ |
  | v-model | any  |        | 双向绑定 | ""     |
