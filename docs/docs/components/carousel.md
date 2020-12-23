
# Carousel 走马灯

## 基础用法

<template>
  <div class="carousel-base">
    <div class="carousel">
      <vp-carousel :height="carouselHeight">
        <vp-carousel-item v-for="item in 6" :key="item">
          {{ item }}
        </vp-carousel-item>
      </vp-carousel>
    </div>
  </div>
</template>

```html
<div class="carousel">
  <vp-carousel :height="carouselHeight">
    <vp-carousel-item v-for="item in 6" :key="item">
      {{ item }}
    </vp-carousel-item>
  </vp-carousel>
</div>

<script>
  export default {
    data() {
      return {
        carouselHeight: "500",
      };
    },
  };
</script>
```

<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
        carouselHeight: "500",
      };
    },
  };
</script>

<!-- 样式 -->
<style>
.carousel-base {
  padding: 20px;
  border: 1px solid #95a5a6;
  border-radius: 5px;
  display: flex;
  justify-content: center;
}
.carousel {
  width: 600px;
  display: flex;
  justify-content: center;
  text-align: center;
}
.vp-carousel-item {
  background-color: #34495e;
  color: #ffffff;
  line-height: 500px;
}
</style>


## Carousel Attributes

| 属性名         | 类型    | 属性值        | 描述             | 默认值 |
| -------------- | ------- | ------------- | ---------------- | ------ |
| height         | String  | "600"         | 走马灯高度       | "300"  |
| interval       | Number  |               | 切换延迟毫秒     | 3000   |
| hasTransition  | Boolean | true \| false | 是否执行过渡动画 | true   |
| transitionTime | Number  |               | 过渡动画毫秒     | 0.5    |
