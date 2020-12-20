
# Checkbox 多选框


## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-checkbox-group v-model="checkboxGroup">
        <vp-checkbox label="A"></vp-checkbox>
        <vp-checkbox label="B"></vp-checkbox>
      </vp-checkbox-group>
    </div>
  </div>
</template>

```html
<vp-checkbox-group v-model="checkboxGroup">
  <vp-checkbox label="A"></vp-checkbox>
  <vp-checkbox label="B"></vp-checkbox>
</vp-checkbox-group>

<script>
  export default {
    data() {
      return {
        checkboxGroup: ["A", "B"],
      };
    }
  };
</script>
```


## 禁用状态

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-checkbox v-model="checkbox" disabled>lol</vp-checkbox>
    </div>
  </div>
</template>

```html
<vp-checkbox v-model="checkbox" disabled>lol</vp-checkbox>

<script>
  export default {
    data() {
      return {
        checkbox: false
      };
    }
  };
</script>
```


<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
        checkboxGroup: ["A", "B"],
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


  ## Checkbox-Group Attributes

| 属性名  | 类型  | 属性值 | 描述               | 默认值 |
| ------- | ----- | ------ | ------------------ | ------ |
| v-model | Array |        | 多选框内容双向绑定 | []     |

  ## Checbox Attributes

| 属性名   | 类型    | 属性值        | 描述               | 默认值 |
| -------- | ------- | ------------- | ------------------ | ------ |
| v-model  | Boolean | true \| false | 多选框内容双向绑定 | false  |
| label    | String  |               | 多选框标签内容     | ""     |
| disabled | Boolean | true \| false | 是否禁用           | false  |
