# Form 表单

## 基础用法

<template>
  <div class="div-base">
    <div class="div-row">
      <vp-form :model="form" :rules="rules" ref="form">
        <vp-form-item label="用户名：" prop="name">
          <vp-input placeholder="请输入用户名" v-model="form.name"></vp-input>
        </vp-form-item>
        <vp-form-item label="爱好：" prop="hobby">
          <vp-input v-model="form.hobby"></vp-input>
        </vp-form-item>
        <vp-form-item label="性别：">
          <vp-switch v-model="form.sex"></vp-switch>
        </vp-form-item>
        <vp-form-item>
          <vp-checkbox-group v-model="form.checkboxGroup">
            <vp-checkbox label="A"></vp-checkbox>
            <vp-checkbox label="B"></vp-checkbox>
          </vp-checkbox-group>
        </vp-form-item>
        <vp-form-item>
          <vp-button @submit="submitForm">提交</vp-button>
        </vp-form-item>
      </vp-form>
    </div>
  </div>
</template>

```html
<vp-form :model="form" :rules="rules" ref="form">
  <vp-form-item label="用户名：" prop="name">
    <vp-input placeholder="请输入用户名" v-model="form.name"></vp-input>
  </vp-form-item>
  <vp-form-item label="爱好：" prop="hobby">
    <vp-input v-model="form.hobby"></vp-input>
  </vp-form-item>
  <vp-form-item label="性别：">
    <vp-switch v-model="form.sex"></vp-switch>
  </vp-form-item>
  <vp-form-item>
    <vp-checkbox-group v-model="form.checkboxGroup">
      <vp-checkbox label="A"></vp-checkbox>
      <vp-checkbox label="B"></vp-checkbox>
    </vp-checkbox-group>
  </vp-form-item>
  <vp-form-item>
    <vp-button @submit="submitForm">提交</vp-button>
  </vp-form-item>
</vp-form>

<script>
  export default {
    data() {
      return {
        form: {
          name: "",
          hobby: "",
          sex: false,
          checkboxGroup: [],
        },
        rules: {
          name: [
            {
              required: true,
              message: "请输入用户名",
              trigger: ["input", "blur"],
            },
          ],
          hobby: [
            { required: true, message: "请输入爱好", trigger: ["input", "blur"] },
          ],
        },
      };
    },
    methods: {
      submitForm(value, e) {
        let form = this.$refs.form;
        form.validate((valid) => {
          if (valid) {
            console.log("校验成功！");
            console.log(value);
          } else {
            console.log("校验失败！");
          }
        });
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
        form: {
          name: "",
          hobby: "",
          sex: false,
          checkboxGroup: [],
        },
        rules: {
          name: [
            {
              required: true,
              message: "请输入用户名",
              trigger: ["input", "blur"],
            },
          ],
          hobby: [
            { required: true, message: "请输入爱好", trigger: ["input", "blur"] },
          ],
        },
      };
    },
    methods: {
      submitForm(value, e) {
        let form = this.$refs.form;
        form.validate((valid) => {
          if (valid) {
            console.log("校验成功！");
            console.log(value);
          } else {
            console.log("校验失败！");
          }
        });
      },
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

## Form Attributes

| 属性名 | 类型   | 属性值 | 描述                                | 默认值 |
| ------ | ------ | ------ | ----------------------------------- | ------ |
| model  | Object |        | 表单对象默认值                      | {}     |
| rules  | Object |        | 表单验证规则（目前只支持 required） |        |

## Form-Item Attributes

| 属性名     | 类型   | 属性值                     | 描述         | 默认值  |
| ---------- | ------ | -------------------------- | ------------ | ------- |
| label      | String |                            | 表单标签     | ""      |
| labelWidth | Number |                            | 表单标签宽度 | 100     |
| labelStyle | String | "right" \| "left" \| "top" | 表单标签位置 | "right" |
| prop       | String |                            | 表单验证名称 |         |

**表单验证方法**：

validate(callback(isValid))

在表单（vp-form）添加 ref 属性，并进行表单校验。

例子:

```javascript
let form = this.$refs.form;
form.validate((valid) => {
  if (valid) {
    console.log("校验成功！");
  } else {
    console.log("校验失败！");
  }
});
```
