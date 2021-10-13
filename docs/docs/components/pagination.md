
# Pagination 分页器

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-pagination
        :total="100"
        :current-page.sync="currentPage1"
      />
    </div>
  </div>
</template>

```html
<vp-pagination :total="100" :current-page.sync="currentPage1" />

<script>
  export default {
    data() {
      return {
        currentPage1: 1,
      };
    },
  };
</script>
```


## 修改按钮内容

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-pagination
        :total="100"
        :current-page.sync="currentPage2"
        :prev-text="'前一页'"
        :next-text="'后一页'"
      />
    </div>
  </div>
</template>


```html
<vp-pagination :total="100" :current-page.sync="currentPage2" :prev-text="'前一页'" :next-text="'后一页'" />

<script>
  export default {
    data() {
      return {
        currentPage2: 1,
      };
    },
  };
</script>
```


## 修改布局

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-pagination
        :total="100"
        :current-page.sync="currentPage3"
        :layout="'jumper'"
      />
    </div>
  </div>
</template>


```html
<vp-pagination :total="100" :current-page.sync="currentPage2" :layout="'jumper'" />

<script>
  export default {
    data() {
      return {
        currentPage3: 1,
      };
    },
  };
</script>
```

## 当只有一页时隐藏分页

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-switch v-model="switchValue" />
      <vp-pagination
        :total="6"
        :current-page.sync="currentPage4"
        :hide-on-single-page="switchValue"
      />
    </div>
  </div>
</template>

```html
<vp-pagination :total="100" :current-page.sync="currentPage2" :layout="'jumper'" />

<script>
  export default {
    data() {
      return {
        currentPage4: 1,
        switchValue: false,
      };
    },
  };
</script>
```

### Pagination Attributes
| 参数 | 说明 | 默认值 | 可选值 |
| --- | --- | -- | -- |
| total | 总条目数 | —— | —— |
| current-page | 当前页数，支持 .sync 修饰符 | 1 | —— |
| layout | 组件布局 | —— | 'jumper' |
| hide-on-single-page | 只有一页时是否隐藏 | false | true/false |
| prev-text | 替代图标显示的上一页文字 | —— | —— |
| next-text | 替代图标显示的下一页文字 | —— | —— |

### Events
事件名称 | 说明 | 回调参数 |
| ---- | -- | ---- |
| current-change | currentPage 改变时会触发 | 当前页 |
| prev-click     | 用户点击上一页按钮改变当前页后触发  | 当前页 |
| next-click     | 用户点击下一页按钮改变当前页后触发  | 当前页 |


<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
        currentPage1: 1,
        currentPage2: 1,
        currentPage3: 1,
        currentPage4: 1,
        switchValue: false,
      };
    },
    methods: {
      handlePreClick(currentPage) {
        console.log(currentPage);
      },
      handleNextClick(currentPage) {
        console.log(currentPage);
      },
      handleCurrentChange(currentPage) {
        console.log(currentPage);
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