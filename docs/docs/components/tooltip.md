
# Tooltip 文字提示


## 基础用法

<template>
  <div class="div-base">
    <div class="tooltip-row">
      <vp-tooltip content="小卡车加油！！！">
        <vp-button>VpTooltip-default</vp-button>
      </vp-tooltip>
      <vp-tooltip placement="bottom" content="小卡车加油！">
        <vp-button>VpTooltip-bottom</vp-button>
      </vp-tooltip>
      <vp-tooltip placement="left" content="小卡车加油！">
        <vp-button>VpTooltip-left</vp-button>
      </vp-tooltip>
      <vp-tooltip placement="right" content="小卡车加油！">
        <vp-button>VpTooltip-right</vp-button>
      </vp-tooltip>
    </div>
  </div>
</template>

```html
<vp-tooltip content="小卡车加油！！！">
  <vp-button>VpTooltip-default</vp-button>
</vp-tooltip>
<vp-tooltip placement="bottom" content="小卡车加油！">
  <vp-button>VpTooltip-bottom</vp-button>
</vp-tooltip>
<vp-tooltip placement="left" content="小卡车加油！">
  <vp-button>VpTooltip-left</vp-button>
</vp-tooltip>
<vp-tooltip placement="right" content="小卡车加油！">
  <vp-button>VpTooltip-right</vp-button>
</vp-tooltip>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
    }
  };
</script>
```

<!-- 样式 -->
<style>
.div-base {
  padding: 20px;
  border: 1px solid #95a5a6;
  border-radius: 5px;
}
.tooltip-row {
  width: 100%;
  margin: 10px;
  display: flex;
  justify-content: space-around;
}
</style>


  ## Tooltip Attributes

| 属性名    | 类型   | 属性值                           | 描述         | 默认值    |
| --------- | ------ | -------------------------------- | ------------ | --------- |
| placement | String | "top"\|"bottom"\|"left"\|"right" | 位置方向     | "top"     |
| content   | String |                                  | 文字提示内容 | "tooltip" |
