# Input 输入框

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-input type="text" placeholder="请输入信息" v-model="input" />
    </div>
  </div>
</template>

```html
<vp-input type="text" placeholder="请输入信息" v-model="input" />

<script>
  export default {
    data() {
      return {
        input: "",
      };
    },
  };
</script>
```

## 禁用状态

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-input type="text" placeholder="请输入信息" disabled />
    </div>
  </div>
</template>

```html
<vp-input type="text" placeholder="请输入信息" disabled />
```

## 可清空

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-input type="text" placeholder="可清空信息" v-model="input1" clearable />
    </div>
  </div>
</template>

```html
<vp-input type="text" placeholder="可清空信息" v-model="input2" clearable />

<script>
  export default {
    data() {
      return {
        input2: "",
      };
    },
  };
</script>
```

## 文本域

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-input type="textarea" v-model="textarea" @blur="blurHandle" @focus="focusHandle" @input="textareaInputHandle" />
    </div>
  </div>
</template>

```html
<vp-input type="textarea" v-model="textarea" @blur="blurHandle" @focus="focusHandle" @input="textareaInputHandle" />

<script>
  export default {
    data() {
      return {
        textarea: ""
      };
    },
    methods: {
      blurHandle(e) {
        console.log("blur");
      },
      focusHandle(e) {
        console.log("focus");
      },
      textareaInputHandle(value) {
        console.log("input", value);
      }
    }
  };
</script>
```

<!-- 脚本 -->
<script>
  export default {
    data() {
      return {
        input: "",
        input1: "",
        input2: "",
        textarea: ""
      };
    },
    methods: {
      blurHandle(e) {
        console.log("blur");
      },
      focusHandle(e) {
        console.log("focus");
      },
      textareaInputHandle(value) {
        console.log("input", value);
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


## Input Attributes

| 属性名      | 类型    | 属性值                             | 描述              | 默认值 |
| ----------- | ------- | ---------------------------------- | ----------------- | ------ |
| type        | string  | "text" \| "password" \| "textarea" | input 类型        | "text" |
| placeholder | string  |                                    | 提示文本          | ""     |
| v-model     | any     |                                    | 值                | ""     |
| disabled    | boolean | true \| false                      | 是否禁止          | false  |
| clearable   | boolean | true \| false                      | 是否可清除        | false  |
| cols        | number  |                                    | textarea 列数     | 20     |
| rows        | number  |                                    | textarea 行数     | 5      |
| readonly    | boolean | true \| false                      | textarea 是否只读 | false  |
| maxlength   | number  |                                    | textarea 最大数   | 100    |


## Button Events

| 事件名 | 描述         | 返回值 |
| ------ | ------------ | ------ |
| blur   | 取消焦点触发 | event  |
| focus  | 获得焦点触发 | event  |
| input  | 输入时触发   | value  |
