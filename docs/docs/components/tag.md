
# Tag 标签

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-tag>默认标签</vp-tag>
      <vp-tag type="success">Success 标签</vp-tag>
      <vp-tag type="info">Info 标签</vp-tag>
      <vp-tag type="warning">Warning 标签</vp-tag>
      <vp-tag type="danger">Danger 标签</vp-tag>
      </div>
  </div>
</template>

```html
<vp-tag>默认标签</vp-tag>
<vp-tag type="success">Success 标签</vp-tag>
<vp-tag type="info">Info 标签</vp-tag>
<vp-tag type="warning">Warning 标签</vp-tag>
<vp-tag type="danger">Danger 标签</vp-tag>
```


## 不同主题

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-tag effect="dark">默认标签</vp-tag>
      <vp-tag effect="dark" type="success">Success 标签</vp-tag>
      <vp-tag effect="dark" type="info">Info 标签</vp-tag>
      <vp-tag effect="dark" type="warning">Warning 标签</vp-tag>
      <vp-tag effect="dark" type="danger">Danger 标签</vp-tag>
      </div>
  </div>
</template>

```html
<vp-tag effect="dark">默认标签</vp-tag>
<vp-tag effect="dark" type="success">Success 标签</vp-tag>
<vp-tag effect="dark" type="info">Info 标签</vp-tag>
<vp-tag effect="dark" type="warning">Warning 标签</vp-tag>
<vp-tag effect="dark" type="danger">Danger 标签</vp-tag>
```



## 可关闭

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-tag closable>默认标签</vp-tag>
      <vp-tag closable type="success">Success 标签</vp-tag>
      <vp-tag closable type="info">Info 标签</vp-tag>
      <vp-tag closable type="warning">Warning 标签</vp-tag>
      <vp-tag closable type="danger">Danger 标签</vp-tag>
      </div>
  </div>
</template>

```html
<vp-tag closable>默认标签</vp-tag>
<vp-tag closable type="success">Success 标签</vp-tag>
<vp-tag closable type="info">Info 标签</vp-tag>
<vp-tag closable type="warning">Warning 标签</vp-tag>
<vp-tag closable type="danger">Danger 标签</vp-tag>
```


<!-- 脚本 -->
<script>
  export default {
    data() {
      return {

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


  ## Tag Attributes

| 属性名             | 类型    | 属性值                                            | 描述             | 默认值    |
| ------------------ | ------- | ------------------------------------------------- | ---------------- | --------- |
| type               | String  | "default"\|"success"\|"info"\|"warning"\|"danger" | 标签类型         | "default" |
| closable           | Boolean | true \| false                                     | 是否可关闭       | false     |
| disableTransitions | Boolean | true \| false                                     | 是否取消关闭动画 | false     |
| effect             | String  | "light" \| "dark"                                 | 主题             | "light"   |

