# Select 选择器

## 基础用法

<template>
  <div class="switch-base">
    <vp-select v-model="selectValue1">
      <vp-option
        v-for="option in selectOption1"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></vp-option>
    </vp-select>
  </div>
</template>

```html
<vp-select v-model="selectValue1">
  <vp-option
    v-for="option in selectOption1"
    :key="option.value"
    :label="option.label"
    :value="option.value"
  ></vp-option>
</vp-select>

<script>
  export default {
    data() {
      return {
        selectOption1: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue1: "6",
      };
    },
  };
</script>
```


## 选择器禁用状态

<template>
  <div class="switch-base">
    <vp-select v-model="selectValue2" disabled>
      <vp-option
        v-for="option in selectOption2"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></vp-option>
    </vp-select>
  </div>
</template>

```html
<vp-select v-model="selectValue2" disabled>
  <vp-option
    v-for="option in selectOption2"
    :key="option.value"
    :label="option.label"
    :value="option.value"
  ></vp-option>
</vp-select>

<script>
  export default {
    data() {
      return {
        selectOption2: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue2: "6",
      };
    },
  };
</script>
```



## 选择项禁用状态

<template>
  <div class="switch-base">
    <vp-select v-model="selectValue3">
      <vp-option
        v-for="option in selectOption3"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        :disabled="option.disabled"
      ></vp-option>
    </vp-select>
  </div>
</template>

```html
<vp-select v-model="selectValue3">
  <vp-option
    v-for="option in selectOption3"
    :key="option.value"
    :label="option.label"
    :value="option.value"
    :disabled="option.disabled"
  ></vp-option>
</vp-select>

<script>
  export default {
    data() {
      return {
        selectOption3: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
            disabled: true,
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue3: "6",
      };
    },
  };
</script>
```



## 可清空

<template>
  <div class="switch-base">
    <vp-select v-model="selectValue4" clearable>
      <vp-option
        v-for="option in selectOption4"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></vp-option>
    </vp-select>
  </div>
</template>

```html
<vp-select v-model="selectValue4" clearable>
  <vp-option
    v-for="option in selectOption4"
    :key="option.value"
    :label="option.label"
    :value="option.value"
  ></vp-option>
</vp-select>

<script>
  export default {
    data() {
      return {
        selectOption4: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue4: "6",
      };
    },
  };
</script>
```


## 可搜索

<template>
  <div class="switch-base">
    <vp-select v-model="selectValue5" filterable>
      <vp-option
        v-for="option in selectOption5"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></vp-option>
    </vp-select>
  </div>
</template>

```html
<vp-select v-model="selectValue5" filterable>
  <vp-option
    v-for="option in selectOption5"
    :key="option.value"
    :label="option.label"
    :value="option.value"
  ></vp-option>
</vp-select>

<script>
  export default {
    data() {
      return {
        selectOption5: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue5: "6",
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
        selectOption1: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue1: "6",

        selectOption2: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue2: "6",

        selectOption3: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
            disabled: true,
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue3: "6",

        selectOption4: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue4: "6",

        selectOption5: [
          {
            value: "1",
            label: "小卡车1",
          },
          {
            value: "2",
            label: "小卡车2",
          },
          {
            value: "3",
            label: "小卡车3",
          },
          {
            value: "4",
            label: "小卡车4",
          },
          {
            value: "5",
            label: "小卡车5",
          },
          {
            value: "6",
            label: "小卡车6",
          },
          {
            value: "7",
            label: "小卡车7",
          },
          {
            value: "8",
            label: "小卡车8",
          },
        ],
        selectValue5: "6",
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



## Select Attributes

| 属性名     | 类型    | 属性值        | 描述             | 默认值 |
| ---------- | ------- | ------------- | ---------------- | ------ |
| v-model    | String  | -             | 绑定值           |        |
| disabled   | Boolean | true \| false | 是否禁用         | false  |
| clearable  | Boolean | true \| false | 是否可以清空选项 | false  |
| filterable | Boolean | true \| false | 是否可搜索       | false  |


## Option Attributes

| 属性名   | 类型    | 属性值        | 描述         | 默认值 |
| -------- | ------- | ------------- | ------------ | ------ |
| value    | String  | -             | 选项的值     |        |
| disabled | Boolean | true \| false | 是否禁用     | false  |
| label    | String  | -             | 是选项的标签 |        |
