
# Timeline 时间线

## 基础用法

<template>
  <div class="switch-base">
    <vp-timeline>
      <vp-timeline-item
        v-for="time in activities1"
        :key="time.timestamp"
        :timestamp="time.timestamp"
        >{{ time.content }}
      </vp-timeline-item
      >
    </vp-timeline>
  </div>
</template>

```html
<template>
  <div class="switch-base">
    <vp-timeline>
      <vp-timeline-item
        v-for="time in activities1"
        :key="time.timestamp"
        :timestamp="time.timestamp"
        >{{ time.content }}
      </vp-timeline-item
      >
    </vp-timeline>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activities1: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
          color: "#3B86E8",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        },
      ],
      };
    },
  };
</script>
```


## 时间戳位置

<template>
  <div class="switch-base">
    <vp-timeline>
      <vp-timeline-item
        v-for="time in activities1"
        :key="time.timestamp"
        :timestamp="time.timestamp"
        :placement="'top'"
        >{{ time.content }}
      </vp-timeline-item
      >
    </vp-timeline>
  </div>
</template>

```html
<template>
  <div class="switch-base">
    <vp-timeline>
      <vp-timeline-item
        v-for="time in activities1"
        :key="time.timestamp"
        :timestamp="time.timestamp"
        :placement="'top'"
        >{{ time.content }}
      </vp-timeline-item
      >
    </vp-timeline>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activities1: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        },
      ],
      };
    },
  };
</script>
```

## 自定义颜色

<template>
  <div class="switch-base">
    <vp-timeline>
      <vp-timeline-item
        v-for="time in activities2"
        :key="time.timestamp"
        :timestamp="time.timestamp"
        :color="time.color"
        >{{ time.content }}
      </vp-timeline-item
      >
    </vp-timeline>
  </div>
</template>

```html
<template>
  <div class="switch-base">
    <vp-timeline>
      <vp-timeline-item
        v-for="time in activities2"
        :key="time.timestamp"
        :timestamp="time.timestamp"
        :color="time.color"
        >{{ time.content }}
      </vp-timeline-item
      >
    </vp-timeline>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activities2: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
          color: "#3B86E8",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        },
      ],
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
        activities1: [
          {
            content: "活动按期开始",
            timestamp: "2018-04-15",
          },
          {
            content: "通过审核",
            timestamp: "2018-04-13",
          },
          {
            content: "创建成功",
            timestamp: "2018-04-11",
          },
        ],
        activities2: [
          {
            content: "活动按期开始",
            timestamp: "2018-04-15",
          },
          {
            content: "通过审核",
            timestamp: "2018-04-13",
            color: "#3B86E8",
          },
          {
            content: "创建成功",
            timestamp: "2018-04-11",
          },
        ],
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

## Option Attributes

| 属性名   | 类型    | 属性值        | 描述         | 默认值 |
| -------- | ------- | ------------- | ------------ | ------ |
| timestamp    | String  | - | 时间戳 |  |
| color | String | - |  颜色  | #e4e7ed |
| placement | String  | top/bottom | 时间戳位置 | bottom |
