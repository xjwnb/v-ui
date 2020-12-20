# Container 布局容器

## 基础用法

<template>
  <div class="container-base">
    <!-- container -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-main>Main</vp-main>
      </vp-container>
      <vp-footer>Footer</vp-footer>
    </vp-container>
    <br />
    <!-- container - 1 -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-container>
          <vp-main>Main</vp-main>
          <vp-footer>Footer</vp-footer>
        </vp-container>
      </vp-container>
    </vp-container>
    <br />
    <!-- container - 2 -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-main>Main</vp-main>
      </vp-container>
    </vp-container>
    <br />
    <!-- container - 3 -->
    <vp-container>
      <vp-aside>Aside</vp-aside>
      <vp-container>
        <vp-header>Header</vp-header>
        <vp-main>Main</vp-main>
        <vp-footer>Footer</vp-footer>
      </vp-container>
    </vp-container>
  </div>
</template>

```html
<!-- container -->
<vp-container>
  <vp-header>Header</vp-header>
  <vp-container>
    <vp-aside>Aside</vp-aside>
    <vp-main>Main</vp-main>
  </vp-container>
  <vp-footer>Footer</vp-footer>
</vp-container>
<br />
<!-- container - 1 -->
<vp-container>
  <vp-header>Header</vp-header>
  <vp-container>
    <vp-aside>Aside</vp-aside>
    <vp-container>
      <vp-main>Main</vp-main>
      <vp-footer>Footer</vp-footer>
    </vp-container>
  </vp-container>
</vp-container>
<br />
<!-- container - 2 -->
<vp-container>
  <vp-header>Header</vp-header>
  <vp-container>
    <vp-aside>Aside</vp-aside>
    <vp-main>Main</vp-main>
  </vp-container>
</vp-container>
<br />
<!-- container - 3 -->
<vp-container>
  <vp-aside>Aside</vp-aside>
  <vp-container>
    <vp-header>Header</vp-header>
    <vp-main>Main</vp-main>
    <vp-footer>Footer</vp-footer>
  </vp-container>
</vp-container>

<style>
.vp-header {
  background-color: aqua;
  text-align: center;
  line-height: 60px;
}
.vp-main {
  background-color: aquamarine;
  text-align: center;
}
.vp-aside {
  background-color: cornflowerblue;
  text-align: center;
}
.vp-footer {
  background-color: cadetblue;
  text-align: center;
  line-height: 60px;
}
</style>
```

<!-- 样式 -->
<style>
.container-base {
  padding: 20px;
  border: 1px solid #95a5a6;
  border-radius: 5px;
}
.container-row {
  margin: 10px;
}
.vp-header {
  background-color: aqua;
  text-align: center;
  line-height: 60px;
}
.vp-main {
  background-color: aquamarine;
  text-align: center;
}
.vp-aside {
  background-color: cornflowerblue;
  text-align: center;
}
.vp-footer {
  background-color: cadetblue;
  text-align: center;
  line-height: 60px;
}
</style>

## Container

    1. 父容器：vp-container
    2. 头部容器：vp-header
    3. 内容容器：vp-main
    4. 侧边容器：vp-aside
    5. 底部容器：vp-footer
