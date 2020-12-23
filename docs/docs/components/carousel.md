# Carousel 走马灯

## 基础用法

<template>
  <div class="carousel-base">
    <div class="carousel">
      <vp-carousel :height="carouselHeight">
        <vp-carousel-item v-for="img in imgList" :key="img.id">
          <vp-image :src="img.src" width="600px" height="500px"></vp-image>
        </vp-carousel-item>
      </vp-carousel>
    </div>
  </div>
</template>

```html
<div class="carousel">
  <vp-carousel :height="carouselHeight">
    <vp-carousel-item v-for="img in imgList" :key="img.id">
      <vp-image :src="img.src" width="600px" height="500px"></vp-image>
    </vp-carousel-item>
  </vp-carousel>
</div>

<script>
  export default {
    data() {
      return {
        carouselHeight: "500",
        imgList: [
          {
            id: 1,
            src:
              "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          },
          {
            id: 2,
            src:
              "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          },
          {
            id: 3,
            src:
              "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          },
        ],
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
        imgList: [
          {
            id: 1,
            src:
              "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          },
          {
            id: 2,
            src:
              "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          },
          {
            id: 3,
            src:
              "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
          },
        ],
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
</style>


## Carousel Attributes

| 属性名         | 类型    | 属性值        | 描述             | 默认值 |
| -------------- | ------- | ------------- | ---------------- | ------ |
| height         | String  | "600"         | 走马灯高度       | "300"  |
| interval       | Number  |               | 切换延迟毫秒     | 3000   |
| hasTransition  | Boolean | true \| false | 是否执行过渡动画 | true   |
| transitionTime | Number  |               | 过渡动画毫秒     | 0.5    |
