
# Tabs 标签页

## 基础用法

<template>
  <div class="switch-base">
    <vp-tabs v-model="tabsActiveName">
      <vp-tab-pane label="小卡车" name="n1">小卡车</vp-tab-pane>
      <vp-tab-pane label="蜘蛛侠" name="n2">蜘蛛侠</vp-tab-pane>
      <vp-tab-pane label="猪猪侠" name="n3">猪猪侠</vp-tab-pane>
    </vp-tabs>
  </div>
</template>

```html
<vp-tabs v-model="tabsActiveName">
  <vp-tab-pane label="小卡车" name="n1">小卡车</vp-tab-pane>
  <vp-tab-pane label="蜘蛛侠" name="n2">蜘蛛侠</vp-tab-pane>
  <vp-tab-pane label="猪猪侠" name="n3">猪猪侠</vp-tab-pane>
</vp-tabs>

<script>
  export default {
    data() {
      return {
        tabsActiveName: "n2",
      };
    },
  };
</script>
```

## Tabs Attributes

| 属性名  | 类型   | 属性值 | 描述                | 默认值 |
| ------- | ------ | ------ | ------------------- | ------ |
| v-model | String | -      | 第一个选项卡的 name | -      |


## Tabs-pane Attributes

| 属性名 | 类型   | 属性值 | 描述                                              | 默认值 |
| ------ | ------ | ------ | ------------------------------------------------- | ------ |
| label  | String | -      | 标签卡标题                                        | -      |
| name   | String | -      | 与选项卡绑定值 value 对应的标识符，表示选项卡别名 | -      |

## Tabs Events

| 事件名    | 描述       | 返回值       |
| --------- | ---------- | ------------ |
| tab-click | 标签页点击 | vnode, event |

<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
        tabsActiveName: "n2",
      };
    },
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