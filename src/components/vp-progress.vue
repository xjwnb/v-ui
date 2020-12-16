<template>
  <div class="vp-progress-bar">
    <div class="vp-progress-bar-outer">
      <div
        class="vp-progress-bar-inner"
        :style="{
          height: strokeWidth,
          backgroundColor: bgc || backgroundColor,
          width: percent + '%',
        }"
      >
        <div class="vp-progress-bar-inner-inside-text" v-if="textInside">
          {{ percent + "%" }}
        </div>
      </div>
    </div>
    <div class="vp-progress-bar-inner-text" v-if="!textInside">
      {{ percent + "%" }}
    </div>
  </div>
</template>

<script>
export default {
  name: "VpProgress",
  props: {
    strokeWidth: {
      type: Number,
      default: 10,
    },
    percentage: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
    },
    color: {
      default: "",
    },
    textInside: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      backgroundColor: "#409EFF",
      percent: this.percentage,
      defaultColor: "#409EFF",
    };
  },
  watch: {
    percentage(newValue) {
      this.percent = newValue;
      if (this.color) {
        switch (Object.prototype.toString.call(this.color)) {
          case "[object String]":
            this.backgroundColor = this.color;
            break;
          case "[object Array]":
            let colorArr = this.color;
            let firstColorItem = colorArr.find(
              (item) => item.percentage >= this.percentage
            );
            this.backgroundColor = firstColorItem.color;
            this.percent = newValue;
            break;
        }
      } else {
        if (this.status) {
          switch (this.status) {
            case "success":
              this.backgroundColor = "#67C23A";
              break;
            case "warning":
              this.backgroundColor = "#E6A23C";
              break;
            case "exception":
              this.backgroundColor = "#F56C6C";
            default:
              this.backgroundColor = this.defaultColor;
              break;
          }
        }
      }
    },
  },
  computed: {
    bgc() {
      if (this.color) {
        switch (Object.prototype.toString.call(this.color)) {
          case "[object String]":
            // this.backgroundColor = this.color;
            return this.color;
            break;
        }
      } else if (this.status) {
        switch (this.status) {
          case "success":
            this.backgroundColor = "#67C23A";
            return "#67C23A";
            break;
          case "warning":
            this.backgroundColor = "#E6A23C";
            return "#E6A23C";
            break;
          case "exception":
            this.backgroundColor = "#F56C6C";
            return "#F56C6C";
            break;
          default:
            this.backgroundColor = this.defaultColor;
            return this.defaultColor;
            break;
        }
      }
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.vp-progress-bar-outer {
  width: 100%;
  background-color: #ebeef5;
  border-radius: 15px;
}
.vp-progress-bar {
  display: flex;
}
.vp-progress-bar-inner {
  border-radius: 15px;
  height: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
}
</style>