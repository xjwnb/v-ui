
# Divider 分割线

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-divider>小卡车加油！</vp-divider>
    </div>
  </div>
</template>

```html
<vp-divider>小卡车加油！</vp-divider>
```


## 内容方向

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-divider content-position="left">小卡车加油！</vp-divider>
      <vp-divider content-position="right">小卡车加油！</vp-divider>
    </div>
  </div>
</template>

```html
<vp-divider content-position="left">小卡车加油！</vp-divider>
<vp-divider content-position="right">小卡车加油！</vp-divider>
```


## 垂直分割

<template>
  <div class="div-base">
    <div class="div-row">
      小卡车
      <vp-divider direction="vertical"></vp-divider>
      加油！
    </div>
  </div>
</template>

```html
小卡车
<vp-divider direction="vertical"></vp-divider>
加油！
```


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


  ## Divider Attributes

| 属性名          | 类型   | 属性值                     | 描述       | 默认值       |
| --------------- | ------ | -------------------------- | ---------- | ------------ |
| color           | String | "#xxx" \| "#xxxxxx"        | 分割线颜色 | "#dcdfe6"    |
| direction       | String | "horizontal" \| "vertical" | 分割线方向 | "horizontal" |
| contentPosition |        |                            |            |              |