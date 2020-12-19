  ## vp-form

| 属性名 | 类型   | 属性值 | 描述                               | 默认值 |
| ------ | ------ | ------ | ---------------------------------- | ------ |
| model  | Object |        | 表单对象默认值                     | {}     |
| rules  | Object |        | 表单验证规则（目前只支持required） |        |

  ## vp-form-item

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
