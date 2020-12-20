
# NavMenu 导航菜单

## 基础用法

<template>
  <vp-menu>
    <vp-menu-item><span class="iconfont icon-success"></span>我是item - 1</vp-menu-item>
    <vp-submenu>
      <template v-slot:title> 我是title - 2———— </template>
      <vp-menu-item>我是item 2-1</vp-menu-item>
      <vp-menu-item>我是item 2-2</vp-menu-item>
      <vp-menu-item>我是item 2-3</vp-menu-item>
      <vp-submenu>
        <template v-slot:title> 我是title-2-4</template>
        <vp-menu-item>我是item 2-4-1</vp-menu-item>
        <vp-menu-item>我是item 2-4-2</vp-menu-item>
        <vp-menu-item>我是item 2-4-3</vp-menu-item>
        <vp-submenu>
          <template v-slot:title> 我是title 2-5 </template>
          <vp-menu-item>我是item 2-5-1</vp-menu-item>
          <vp-menu-item>我是item 2-5-2</vp-menu-item>
          <vp-menu-item>我是item 2-5-3</vp-menu-item>
        </vp-submenu>
      </vp-submenu>
    </vp-submenu>
  </vp-menu>
</template>

```html
<vp-menu>
  <vp-menu-item
    ><span class="iconfont icon-success"></span>我是item - 1</vp-menu-item
  >
  <vp-submenu>
    <template v-slot:title> 我是title - 2———— </template>
    <vp-menu-item>我是item 2-1</vp-menu-item>
    <vp-menu-item>我是item 2-2</vp-menu-item>
    <vp-menu-item>我是item 2-3</vp-menu-item>
    <vp-submenu>
      <template v-slot:title> 我是title-2-4</template>
      <vp-menu-item>我是item 2-4-1</vp-menu-item>
      <vp-menu-item>我是item 2-4-2</vp-menu-item>
      <vp-menu-item>我是item 2-4-3</vp-menu-item>
      <vp-submenu>
        <template v-slot:title> 我是title 2-5 </template>
        <vp-menu-item>我是item 2-5-1</vp-menu-item>
        <vp-menu-item>我是item 2-5-2</vp-menu-item>
        <vp-menu-item>我是item 2-5-3</vp-menu-item>
      </vp-submenu>
    </vp-submenu>
  </vp-submenu>
</vp-menu>
```



## 侧边导航菜单

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-menu mode="vertical" @select="selectedHandle" background-color="#00f" text-color="#0f0" >
        <vp-menu-item index="1">我是item - 1</vp-menu-item>
        <vp-submenu index="2">
          <template v-slot:title> 我是title - 2———— </template>
          <vp-menu-item index="2-1">我是item 2-1</vp-menu-item>
          <vp-menu-item index="2-2">我是item 2-2</vp-menu-item>
          <vp-menu-item index="2-3">我是item 2-3</vp-menu-item>
          <vp-submenu index="2-4">
            <template v-slot:title> 我是title-2-4</template>
            <vp-menu-item index="2-4-1">我是item 2-4-1</vp-menu-item>
            <vp-menu-item index="2-4-2">我是item 2-4-2</vp-menu-item>
            <vp-menu-item index="2-4-3">我是item 2-4-3</vp-menu-item>
            <vp-submenu index="2-5">
              <template v-slot:title> 我是title 2-5 </template>
              <vp-menu-item index="2-5-1">我是item 2-5-1</vp-menu-item>
              <vp-menu-item index="2-5-2">我是item 2-5-2</vp-menu-item>
              <vp-menu-item index="2-5-3">我是item 2-5-3</vp-menu-item>
            </vp-submenu>
          </vp-submenu>
        </vp-submenu>
        <vp-menu-item index="3">我是item - 3</vp-menu-item>
        <vp-menu-item index="4">我是item - 4</vp-menu-item>
        <vp-menu-item index="5" disabled>我是item - 5</vp-menu-item>
      </vp-menu>
    </div>
  </div>
</template>

```html
<vp-menu mode="vertical" @select="selectedHandle" background-color="#00f" text-color="#0f0">
  <vp-menu-item index="1">我是item - 1</vp-menu-item>
  <vp-submenu index="2">
    <template v-slot:title> 我是title - 2———— </template>
    <vp-menu-item index="2-1">我是item 2-1</vp-menu-item>
    <vp-menu-item index="2-2">我是item 2-2</vp-menu-item>
    <vp-menu-item index="2-3">我是item 2-3</vp-menu-item>
    <vp-submenu index="2-4">
      <template v-slot:title> 我是title-2-4</template>
      <vp-menu-item index="2-4-1">我是item 2-4-1</vp-menu-item>
      <vp-menu-item index="2-4-2">我是item 2-4-2</vp-menu-item>
      <vp-menu-item index="2-4-3">我是item 2-4-3</vp-menu-item>
      <vp-submenu index="2-5">
        <template v-slot:title> 我是title 2-5 </template>
        <vp-menu-item index="2-5-1">我是item 2-5-1</vp-menu-item>
        <vp-menu-item index="2-5-2">我是item 2-5-2</vp-menu-item>
        <vp-menu-item index="2-5-3">我是item 2-5-3</vp-menu-item>
      </vp-submenu>
    </vp-submenu>
  </vp-submenu>
  <vp-menu-item index="3">我是item - 3</vp-menu-item>
  <vp-menu-item index="4">我是item - 4</vp-menu-item>
  <vp-menu-item index="5" disabled>我是item - 5</vp-menu-item>
</vp-menu>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      selectedHandle(key, keyPath) {
        console.log(key, keyPath);
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
      selectedHandle(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  };
</script>

<!-- 样式 -->
<style>
.div-base {
  padding: 20px 0;
  border: 1px solid #95a5a6;
  border-radius: 5px;
}
.div-row {
  margin: 10px;
}
</style>


  ## Menu Attributes

| 属性名          | 类型   | 属性值                     | 描述         | 默认值       |
| --------------- | ------ | -------------------------- | ------------ | ------------ |
| mode            | String | "vertical" \| "horizontal" | 菜单方向模式 | "horizontal" |
| backgroundColor | String | "#xxx" \| "#xxxxxx"        | 菜单背景颜色 | ""           |
| textColor       | String | "#xxx" \| "#xxxxxx"        | 菜单文本颜色 | ""           |

## Menu Events

| 事件名   | 描述     | 返回值           |
| -------- | -------- | ---------------- |
| selected | 选中事件 | index, indexPath |

  ## Submenu Attributes

| 属性名 | 类型   | 属性值 | 描述     | 默认值 |
| ------ | ------ | ------ | -------- | ------ |
| index  | String |        | 唯一标识 | ""     |

  ## Menu-Item Attributes

| 属性名   | 类型    | 属性值        | 描述     | 默认值 |
| -------- | ------- | ------------- | -------- | ------ |
| index    | String  |               | 唯一标识 | ""     |
| disabled | Boolean | true \| false | 是否禁用 | false  |
