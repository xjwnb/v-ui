# Loaidng 加载

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-button @click="loadingHandle">默认 Loading</vp-button>
    </div>
  </div>
</template>

```html
<vp-button @click="loadingHandle">默认 Loading</vp-button>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      loadingHandle() {
        let loadObj = this.$loading();
        setTimeout(() => {
          loadObj.close();
        }, 3000);
      }
    }
  };
</script>
```


## 自定义 Loading

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-button @click="loadingHandle1">自定义 Loading</vp-button>
      <div class="loading">
        loading...
      </div>
    </div>
  </div>
</template>

```html
<vp-button @click="loadingHandle1">自定义 Loading</vp-button>
<div class="loading">loading...</div>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      loadingHandle1() {
        let loadObj = this.$loading({
          ele: document.getElementsByClassName("loading")[0],
          color: "#192a56",
          iconfont: "icon-redupaixu",
          backgroundColor: "rgba(52, 152, 219, .7)"
        });
        setTimeout(() => {
          loadObj.close();
        }, 3000);
      }
    }
  };
</script>

<style>
.loading {
  border: 1px solid #eee;
  width: 300px;
  height: 300px;
}
</style>
```

<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      loadingHandle() {
        let loadObj = this.$loading();
        setTimeout(() => {
          loadObj.close();
        }, 3000);
      },
      loadingHandle1() {
        let loadObj = this.$loading({
          ele: document.getElementsByClassName("loading")[0],
          color: "#192a56",
          iconfont: "icon-redupaixu",
          backgroundColor: "rgba(52, 152, 219, .7)"
        });
        setTimeout(() => {
          loadObj.close();
        }, 3000);
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
.loading {
  border: 1px solid #eee;
  width: 300px;
  height: 300px;
}
</style>


  ## Loaidng
  使用方法 

  Vue.use("loading.vue");

  this.$loading(option: Object): Object -> close();

  ## Loading Attributes

| 属性名          | 类型    | 描述                                         | 默认值                 |
| --------------- | ------- | -------------------------------------------- | ---------------------- |
| ele             | DOM元素 | 要添加加载的DOM元素                          | document.body          |
| message         | String  | 加载显示的文本                               | "loading..."           |
| color           | String  | 加载显示文本颜色                             | "#000000"              |
| iconfont        | String  | 加载文本前方显示的 iconfont 类名("icon-xxx") | ""                     |
| backgroundColor | String  | 加载背景颜色（建议使用 rgba）                | "rgba(44, 62, 80, .7)" |
