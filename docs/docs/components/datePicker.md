# DatePicker 日期选择器

## 基础用法

<template>
  <div class="switch-base">
    <vp-date-picker v-model="datePicker1" placeholder="请选择日期" />
  </div>
</template>

```html
<vp-date-picker v-model="datePicker1" placeholder="请选择日期" />

<script>
  export default {
    data() {
      return {
        datePicker1: "",
      };
    },
  };
</script>
```

## 不可选中

<template>
  <div class="switch-base">
    <vp-date-picker
      v-model="datePicker2"
      placeholder="请选择日期"
      :picker-option="pickerOption"
      @blur="handleDatePickerBlur"
      @focus="handleDatePickerFocus"
      @change="handleDatePickerChange"
    />
  </div>
</template>

```html
<vp-date-picker
  v-model="datePicker2"
  placeholder="请选择日期"
  :picker-option="pickerOption"
  @blur="handleDatePickerBlur"
  @focus="handleDatePickerFocus"
  @change="handleDatePickerChange"
/>

<script>
  export default {
    data() {
      return {
        datePicker2: "",
        pickerOption: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
      };
    },
    methods: {
      handleDatePickerBlur(vm) {
        console.log(vm);
      },
      handleDatePickerFocus(vm) {
        console.log(vm);
      },
      handleDatePickerChange(vm) {
        console.log(vm);
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
        datePicker1: "",
        datePicker2: "",
        pickerOption: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
      };
    },
    methods: {
      handleDatePickerBlur(vm) {
        console.log(vm);
      },
      handleDatePickerFocus(vm) {
        console.log(vm);
      },
      handleDatePickerChange(vm) {
        console.log(vm);
      },
    }
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