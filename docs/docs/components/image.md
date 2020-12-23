
# Image 图片


## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-image :src="imgSrc1"></vp-image>
    </div>
  </div>
</template>

```html
<vp-image :src="imgSrc1"></vp-image>

<script>
  export default {
    data() {
      return {
        imgSrc1: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
      };
    },
  };
</script>
```



## fit 属性

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-image v-for="img in imgList1" 
                :key="img.id" 
                :src="img.src" 
                width="500px" 
                height="400px" 
                :fit="img.fit" >
      </vp-image>
    </div>
  </div>
</template>

```html
<vp-image v-for="img in imgList1" 
          :key="img.id" 
          :src="img.src" 
          width="500px" 
          height="400px" 
          :fit="img.fit" >
</vp-image>

<script>
  export default {
    data() {
      return {
        imgSrc1: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        imgList1: [
          {
            id: 1,
            src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
            fit: "fill",
          },
          {
            id: 2,
            src: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
            fit: "contain",
          },
          {
            id: 3,
            src: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
            fit: "cover",
          },
          {
            id: 4,
            src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
            fit: "none",
          },
          {
            id: 5,
            src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            fit: "scale-down",
          },
        ],
      };
    },
  };
</script>
```


## 懒加载

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-image v-for="img in imgList1" 
                :key="img.id" 
                :src="img.src" 
                width="500px" 
                height="400px" 
                lazy 
                @load="loadHandle" >
      </vp-image>
    </div>
  </div>
</template>

```html
<vp-image v-for="img in imgList1" 
          :key="img.id" 
          :src="img.src" 
          width="500px" 
          height="400px" 
          lazy 
          @load="loadHandle" >
</vp-image>

<script>
  export default {
    data() {
      return {
        imgSrc1: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        imgList1: [
          {
            id: 1,
            src: "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
          },
          {
            id: 2,
            src: "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
          },
          {
            id: 3,
            src: "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
          },
          {
            id: 4,
            src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
          },
          {
            id: 5,
            src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
          },
        ],
      };
    },
    methods: {
      loadHandle(e) {
        console.log(e);
      }
    }
  };
</script>
```


## 预览

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-image :src="imgSrc1" :previewSrc="imgSrc1" ></vp-image>
    </div>
  </div>
</template>

```html
<vp-image :src="imgSrc1"></vp-image>

<script>
  export default {
    data() {
      return {
        imgSrc1: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
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
        imgSrc1: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        imgList1: [
          {
            id: 1,
            src:
              "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
            fit: "fill",
          },
          {
            id: 2,
            src:
              "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
            fit: "contain",
          },
          {
            id: 3,
            src:
              "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
            fit: "cover",
          },
          {
            id: 4,
            src: "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
            fit: "none",
          },
          {
            id: 5,
            src: "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
            fit: "scale-down",
          },
        ],
      };
    },
    methods: {
      loadHandle(e) {
        console.log(e);
      }
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


  ## Image Attributes

| 属性名     | 类型    | 属性值                                           | 描述           | 默认值  |
| ---------- | ------- | ------------------------------------------------ | -------------- | ------- |
| src        | String  |                                                  | 图片地址       | ""      |
| alt        | String  |                                                  | 图片代替文本   | ""      |
| width      | String  |                                                  | 图片宽度       | "300px" |
| height     | String  |                                                  | 图片高度       | "200px" |
| lazy       | Boolean | true \| false                                    | 是否懒加载     | false   |
| fit        | String  | "fill"\|"contain"\|"cover"\|"none"\|"scale-down" | 原生object-fit | "fill"  |
| previewSrc | String  |                                                  | 图片地址       | ""      |


  ## Image Events
| 事件名 | 描述       | 返回值 |
| ------ | ---------- | ------ |
| load   | 懒加载成功 | event  |
| error  | 懒加载失败 | event  |
