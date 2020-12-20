
# Progress 进度条

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-progress :percentage="80"></vp-progress>
    </div>
  </div>
</template>

```html
<vp-progress :percentage="80"></vp-progress>
```


## 不同状态
<!-- status: "success"|"warning"|"exception" -->
<template>
  <div class="div-base">
    <div class="div-row">
      <vp-progress :percentage="80"></vp-progress>
      <vp-progress :percentage="80" status="success"></vp-progress> 
      <vp-progress :percentage="80" status="warning"></vp-progress>
      <vp-progress :percentage="80" status="exception"></vp-progress>
    </div>
  </div>
</template>

```html
<vp-progress :percentage="80"></vp-progress>
<vp-progress :percentage="80" status="success"></vp-progress> 
<vp-progress :percentage="80" status="warning"></vp-progress>
<vp-progress :percentage="80" status="exception"></vp-progress>
```


## 自定义
<!-- status: "success"|"warning"|"exception" -->
<template>
  <div class="div-base">
    <div class="div-row">
      <vp-progress color="#f56c6c" :percentage="80"></vp-progress>
      <vp-progress :color="percentColorArr" :percentage="percentage" ></vp-progress>
    </div>
  </div>
</template>

```html
<vp-progress color="#f56c6c" :percentage="80"></vp-progress>
<vp-progress :color="percentColorArr" :percentage="percentage" ></vp-progress>

<script>
  export default {
    data() {
      return {
        percent: 0,
        timer: null,
        percentColorArr: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 },
        ]
      };
    },
    computed: {
      percentage() {
        clearTimeout(this.timer);
        this.timer = window.setTimeout(() => {
          if (this.percent >= 100) {
            clearTimeout(this.timer);
            this.percent = 100;
          } else {
            this.percent += 1;
          }
        }, 50);
        return this.percent;
    },
    },
  };
</script>
```


## 百分比内显

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-progress :percentage="80" text-inside></vp-progress>
    </div>
  </div>
</template>

```html
<vp-progress :percentage="80" text-inside></vp-progress>
```



<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
        percent: 0,
        timer: null,
        percentColorArr: [
          { color: '#f56c6c', percentage: 20 },
          { color: '#e6a23c', percentage: 40 },
          { color: '#5cb87a', percentage: 60 },
          { color: '#1989fa', percentage: 80 },
          { color: '#6f7ad3', percentage: 100 },
        ]
      };
    },
    computed: {
      percentage() {
        clearTimeout(this.timer);
        this.timer = window.setTimeout(() => {
          this.percent += 1;
          if (this.percent >= 100) {
            clearTimeout(this.timer);
            this.percent = 100;
          } else {
            this.percent += 1;
          }
        }, 50);
        return this.percent;
    },
    },
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


  ## Progress Attributes

| 属性名      | 类型          | 属性值                                                   | 描述             | 默认值 |
| ----------- | ------------- | -------------------------------------------------------- | ---------------- | ------ |
| strokeWidth | Number        |                                                          | 进度条宽度       | 10     |
| percentage  | Number        |                                                          | 进度条数字百分比 | 0      |
| status      | String        | "success"\|"warning"\|"exception"                        | 进度条状态       | ""     |
| color       | String\|Array | 例如 "#000000" \| [{ color: "#000000", percentage: 20 }] | 颜色规则         | ""     |
| textInside  | Boolean       | true \| false                                            | 文本是否在内部   | false  |
