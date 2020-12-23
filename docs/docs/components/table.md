
# Table 表格

## 基础用法

<template>
  <div class="div-base">
    <vp-table :data="tableData">
      <vp-table-column prop="name" label="名称"></vp-table-column>
      <vp-table-column prop="age" label="年龄"></vp-table-column>
      <vp-table-column label="爱好">
        <template v-slot:data="slotsProps">
          <div>
            <vp-button @click="tableBtnHandle(slotsProps)" >小卡车加油！！！</vp-button>
          </div>
        </template>
      </vp-table-column>
    </vp-table>
  </div>
</template>

```html
<vp-table :data="tableData">
  <vp-table-column prop="name" label="名称"></vp-table-column>
  <vp-table-column prop="age" label="年龄"></vp-table-column>
  <vp-table-column label="爱好">
    <template v-slot:data="slotsProps">
      <div>
        <vp-button @click="tableBtnHandle(slotsProps)" >小卡车加油！</vp-button>
      </div>
    </template>
  </vp-table-column>
</vp-table>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            id: 1,
            name: "小卡车",
            age: 20,
          },
          {
            id: 2,
            name: "蜘蛛侠",
            age: 18,
          },
          {
            id: 3,
            name: "钢铁侠",
            age: 30,
          },
        ],
      };
    },
    methods: {
      tableBtnHandle(slotsPropsData, e) {
        console.log(slotsPropsData);
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
        tableData: [
          {
            id: 1,
            name: "小卡车",
            age: 20,
          },
          {
            id: 2,
            name: "蜘蛛侠",
            age: 18,
          },
          {
            id: 3,
            name: "钢铁侠",
            age: 30,
          },
        ],
      };
    },
    methods: {
      tableBtnHandle(slotsPropsData, e) {
        console.log(slotsPropsData);
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
  width: 100%;

}
</style>


  ## Table Attributes

| 属性名 | 类型    | 属性值        | 描述         | 默认值 |
| ------ | ------- | ------------- | ------------ | ------ |
| data   | Array   |               | 表格数据数组 |        |
| stripe | Boolean | true \| false | 是否为斑马纹 | false  |

  ## Table-Column Attributes

| 属性名 | 类型   | 属性值 | 描述               | 默认值 |
| ------ | ------ | ------ | ------------------ | ------ |
| prop   | String |        | 对应列内容的字段名 | ""     |
| label  | String |        | 对应列内容的标签名 | ""     |

  ## vp-table-column slot 作用域插槽

  ```javascript
  <vp-table-column label="爱好">
    <template v-slot:data="slotsProps">
      <div>
        <vp-button @click="tableBtnHandle(slotsProps)">小卡车加油！！！</vp-button>
      </div>
    </template>
  </vp-table-column>
  
  methods: {
      tableBtnHandle(slotsPropsData, e) {
        console.log(slotsPropsData);  // {data: {…}, $index: 0} 对象->data属性(当前行数据),$index属性(当前行索引)
      }
  }
  ```
