# Button 按钮

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-button>默认按钮</vp-button>
      <vp-button type="primary">主要按钮</vp-button>
      <vp-button type="success">成功按钮</vp-button>
      <vp-button type="info">信息按钮</vp-button>
      <vp-button type="warning">警告按钮</vp-button>
      <vp-button type="danger">危险按钮</vp-button>
    </div>
  </div>
</template>

```html
<vp-button>默认按钮</vp-button>
<vp-button type="primary">主要按钮</vp-button>
<vp-button type="success">成功按钮</vp-button>
<vp-button type="info">信息按钮</vp-button>
<vp-button type="warning">警告按钮</vp-button>
<vp-button type="danger">危险按钮</vp-button>
```

## 圆角按钮

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-button round>默认按钮</vp-button>
      <vp-button type="primary" round>主要按钮</vp-button>
      <vp-button type="success" round>成功按钮</vp-button>
      <vp-button type="info" round>信息按钮</vp-button>
      <vp-button type="warning" round>警告按钮</vp-button>
      <vp-button type="danger" round>危险按钮</vp-button>
    </div>
  </div>
</template>

```html
<vp-button round>默认按钮</vp-button>
<vp-button type="primary" round>主要按钮</vp-button>
<vp-button type="success" round>成功按钮</vp-button>
<vp-button type="info" round>信息按钮</vp-button>
<vp-button type="warning" round>警告按钮</vp-button>
<vp-button type="danger" round>危险按钮</vp-button>
```

## icon 按钮

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-button icon="iconfont icon-redupaixu">默认按钮</vp-button>
      <vp-button type="primary" icon="iconfont icon-redupaixu">主要按钮</vp-button>
      <vp-button type="success" icon="iconfont icon-redupaixu">成功按钮</vp-button>
      <vp-button type="info" icon="iconfont icon-redupaixu">信息按钮</vp-button>
      <vp-button type="warning" icon="iconfont icon-redupaixu">警告按钮</vp-button>
      <vp-button type="danger" icon="iconfont icon-redupaixu">危险按钮</vp-button>
    </div>
  </div>
</template>

```html
<vp-button icon="iconfont icon-redupaixu">默认按钮</vp-button>
<vp-button type="primary" icon="iconfont icon-redupaixu">主要按钮</vp-button>
<vp-button type="success" icon="iconfont icon-redupaixu">成功按钮</vp-button>
<vp-button type="info" icon="iconfont icon-redupaixu">信息按钮</vp-button>
<vp-button type="warning" icon="iconfont icon-redupaixu">警告按钮</vp-button>
<vp-button type="danger" icon="iconfont icon-redupaixu">危险按钮</vp-button>
```

## 禁用状态

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-button disabled>默认按钮</vp-button>
      <vp-button type="primary" disabled>主要按钮</vp-button>
      <vp-button type="success" disabled>成功按钮</vp-button>
      <vp-button type="info" disabled>信息按钮</vp-button>
      <vp-button type="warning" disabled>警告按钮</vp-button>
      <vp-button type="danger" disabled>危险按钮</vp-button>
    </div>
  </div>
</template>

```html
<vp-button disabled>默认按钮</vp-button>
<vp-button type="primary" disabled>主要按钮</vp-button>
<vp-button type="success" disabled>成功按钮</vp-button>
<vp-button type="info" disabled>信息按钮</vp-button>
<vp-button type="warning" disabled>警告按钮</vp-button>
<vp-button type="danger" disabled>危险按钮</vp-button>
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

## Button Attributes

| 属性名   | 类型    | 属性值                                                                 | 描述        | 默认值    |
| -------- | ------- | ---------------------------------------------------------------------- | ----------- | --------- |
| type     | string  | "default" \| "primary" \| "success" \| "info" \| "warning" \| "danger" | button 类型 | "default" |
| round    | boolean | true \| false                                                          | 是否圆角    | true      |
| icon     | string  | icon 类名                                                              | button icon |           |
| disabled | boolean | true \| false                                                          | 是否禁用    | false     |


## Button Events

| 事件名 | 描述            | 返回值 |
| ------ | --------------- | ------ |
| click  | button 点击事件 | event  |
