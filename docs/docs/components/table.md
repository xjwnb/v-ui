  ## vp-table

| 属性名 | 类型    | 属性值        | 描述         | 默认值 |
| ------ | ------- | ------------- | ------------ | ------ |
| data   | Array   |               | 表格数据数组 |        |
| stripe | Boolean | true \| false | 是否为斑马纹 | false  |

  ## vp-table-column

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
