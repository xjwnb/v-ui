<!--
 * @Author: your name
 * @Date: 2021-10-25 09:16:08
 * @LastEditTime: 2021-10-25 17:34:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\components\datePicker\vp-date-picker.vue
-->

<template>
  <div class="vp-date-picker">
    <vp-input
      v-model="date"
      :placeholder="placeholder"
      @focus="handleInputFocus"
      @blur="handleInputBlur"
    >
      <template v-slot:suffix>
        <span class="iconfont icon-rili"></span>
      </template>
    </vp-input>

    <!-- 弹出层 -->
    <transition name="slide-fade">
      <div :class="['vp-date-picker-container']" v-show="active">
        <!-- 当前日期 -->
        {{ currentTime.currentYear }} 年 {{ currentTime.currentMonth }} 月
        <!-- 日期 -->
        <table class="vp-date-table">
          <thead>
            <tr>
              <th v-for="week in weekList" :key="week">
                {{ week }}
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="row in rowLength">
              <tr :key="row">
                <td
                  v-for="td in 7"
                  :key="td"
                  :class="[
                    'activable',
                    (row - 1) * 7 + td - 1 <= preLastIndex ? 'preMonth_td' : '',
                    (row - 1) * 7 + td - 1 >= suffixFirstIndex
                      ? 'suffixMonth_td'
                      : '',

                    currentTime.currentYear === nowYear &&
                    currentTime.currentMonth === nowMonth &&
                    dayList[(row - 1) * 7 + td - 1] === nowDay
                      ? 'currentTime__tb'
                      : '',
                  ]"
                  @click="
                    handleSelectDate(
                      dayList[(row - 1) * 7 + td - 1],
                      (row - 1) * 7 + td - 1
                    )
                  "
                >
                  <div>
                    <span
                      :class="[
                        'date_table_span',
                        currentTime.currentYear === selectYear &&
                        currentTime.currentMonth === selectMonth &&
                        dayList[(row - 1) * 7 + td - 1] === selectDay &&
                        (row - 1) * 7 + td - 1 === selectDayIndex
                          ? 'select_time_tab'
                          : '',
                      ]"
                      >{{ dayList[(row - 1) * 7 + td - 1] }}</span
                    >
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </transition>
    <transition name="slide-fade">
      <div class="vp-option_san" v-show="active"></div>
    </transition>
  </div>
</template>

<script>
// import vpInput from "../input/vp-input.vue";

export default {
  // components: { vpInput },
  name: "vpDatePicker",
  props: {
    // placeholder
    placeholder: {
      type: String,
      default: "",
    },
    // v-model value
    value: {
      type: Date | String,
    },
  },
  watch: {
    // value 
    value: {
      handler(newVal) {
        console.log(newVal);
        let date = new Date(newVal);
        this.date = `${date.getFullYear()}-${date.getMonth() - 1}-${date.getDate()}`
      }
    },

    // 当前日期变化
    currentTime: {
      handler(newVal) {
        this.getFullMonthDateList();
        // 当前选中索引
        console.log("上个月最后一个索引", this.preLastIndex);
        console.log("选中的日期", this.selectDay);
        console.log("下个月第一个索引", this.suffixFirstIndex);
        for (let i = this.preLastIndex + 1; i < this.suffixFirstIndex; i++) {
          if (this.dayList[i] === this.selectDay) {
            this.selectDayIndex = i;
            break;
          }
        }
      },
      deep: true,
    },
  },
  data() {
    return {
      date: "",
      active: false,
      dayList: [],
      weekList: ["日", "一", "二", "三", "四", "五", "六"],
      currentTime: {
        currentYear: "",
        currentMonth: "",
        currentDate: "",
      },
      rowLength: 6,
      preLastIndex: 0,
      suffixFirstIndex: 0,
      // 当前时间
      nowYear: new Date().getFullYear(),
      nowMonth: new Date().getMonth() + 1,
      nowDay: new Date().getDate(),
      selectYear: "",
      selectMonth: "",
      selectDay: "",
      selectDayIndex: "",
    };
  },
  created() {
    this.initNowDate();
    this.getFullMonthDateList();
  },
  mounted() {},
  methods: {
    /**
     * 初始化日期时间
     */
    initNowDate() {
      // if (!this.value) return;
      let date = new Date();
      this.currentTime.currentYear = date.getFullYear();
      this.currentTime.currentMonth = date.getMonth() + 1;
      this.currentTime.currentDate = date.getDate();
    },

    /**
     * 根据年月获取月第某一天星期几
     */
    getDateDay(year, month, day = 1) {
      let date = new Date(year, month - 1, day);
      return date.getDay();
    },

    /**
     * 获取 42 个日期列表
     */
    getFullMonthDateList() {
      let dayList = [];
      // 本月 1 号星期几
      let firstDay = this.getDateDay(
        this.currentTime.currentYear,
        this.currentTime.currentMonth,
        1
      );
      // 本月最后一天
      let lastDay = new Date(
        this.currentTime.currentYear,
        this.currentTime.currentMonth,
        0
      ).getDate();
      for (let i = 1; i <= lastDay; i++) {
        dayList.push(i);
      }
      // 在本月第一天之前还有多少天
      let preDay = firstDay !== 0 ? firstDay : 0;
      // 获取上一个月最后一天
      let preMonthLastDate = new Date(
        this.currentTime.currentYear,
        this.currentTime.currentMonth - 1,
        0
      ).getDate();
      this.preLastIndex = preDay - 1;
      console.log(this.preLastIndex);
      for (let i = 0; i < preDay; i++) {
        dayList.unshift(preMonthLastDate - i);
      }
      let suffixLength = 42 - dayList.length;
      this.suffixFirstIndex = 42 - (42 - dayList.length);
      console.log(this.suffixFirstIndex);
      // 补充下一月剩余日期
      for (let i = 1; i <= suffixLength; i++) {
        dayList.push(i);
      }
      console.log(dayList);
      this.dayList = dayList;
    },

    // consoleNum() {
    //   for (var i = 0; i < 5; i++) {
    //     (function (i) {
    //       setTimeout(() => {
    //         console.log(i);
    //       }, 1000 * i);
    //     })(i);
    //   }
    // },

    /**
     * input blur
     */
    handleInputBlur() {
      this.active = false;
    },

    /**
     * input focus
     */
    handleInputFocus() {
      this.active = true;
    },

    /**
     * 点击选中日期
     */
    handleSelectDate(day, index) {
      console.log(day, index, this.preLastIndex, this.suffixFirstIndex);
      if (this.preLastIndex < index && index < this.suffixFirstIndex) {
        this.selectDayIndex = index;
        this.selectDay = day;
        this.selectYear = this.currentTime.currentYear;
        this.selectMonth = this.currentTime.currentMonth;
      } else if (index <= this.preLastIndex) {
        let currentMonth = this.currentTime.currentMonth;
      
        this.selectYear = currentMonth === 1 ? this.currentTime.currentYear - 1 : this.currentTime.currentYear;
        this.selectMonth = currentMonth === 1 ? 12 : this.currentTime.currentMonth - 1;
        this.selectDay = day;
        this.currentTime.currentMonth = this.selectMonth;
        this.currentTime.currentDate = day;
        this.currentTime.currentYear = this.selectYear;
      } else if (index >= this.suffixFirstIndex) {
        this.selectYear = this.currentTime.currentMonth + 1 > 12 ? this.currentTime.currentYear + 1 : this.currentTime.currentYear;
        this.selectMonth = this.currentTime.currentMonth + 1 > 12 ? 1 : this.currentTime.currentMonth + 1;
        this.currentTime.currentMonth = this.currentTime.currentMonth + 1 > 12 ? 1 : this.currentTime.currentMonth + 1;
        this.selectDay = day;
        this.currentTime.currentDate = day;
        this.currentTime.currentYear = this.selectYear;
      }
      this.$emit("input", new Date(this.selectYear, this.selectMonth, this.selectDay));
      // console.log(this.selectYear, this.selectMonth, this.selectDay);
      // console.log(this.currentTime);
    },
  },
};
</script>

<style lang="less" scoped>
.vp-date-picker {
  position: relative;

  .vp-input {
    width: 220px;

    .vp-input_inner {
      &:hover {
        cursor: pointer;
      }
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
  }

  .vp-date-picker-container {
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    // width: 100%;
    top: 135%;
    z-index: 9999;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 20px;

    .vp-option-container_inner {
      max-height: 204px;
      overflow-x: hidden;
    }

    .vp-date-table {
      font-size: 12px;
      th {
        padding: 5px;
        color: #606266;
        font-weight: 400;
        border-bottom: 1px solid #ebeef5;
      }

      .suffixMonth_td,
      .preMonth_td {
        color: #c0c4cc;
      }

      td {
        // width: 32 px;
        // height: 30 px;
        padding: 4 px 0;
        box-sizing: border-box;
        text-align: center;
        cursor: pointer;
        position: relative;
      }

      td div {
        width: 32px;
        height: 32px;
        // display: flex;
        // align-items: center;

        &:hover {
          color: #409eff;
        }
      }

      .select_time_tab {
        border-radius: 50%;
        color: #ffffff;
        background-color: #409eff;
      }

      .currentTime__tb {
        color: #409eff;
      }

      td .date_table_span {
        // width: 24 px !important;
        // height: 24 px;
        // display: inline-block;
        display: block;
        margin: 0 auto;
        line-height: 32px;
        // position: absolute;
        // left: 50%;
        // transform: translateX(-50%);
        // border-radius: 50%;
      }
    }
  }
  .vp-option_san {
    position: absolute;
    width: 0;
    height: 0;
    border-width: 9px;
    z-index: 10000;
    border-style: dashed dashed solid;
    border-color: transparent transparent #e4e7ed;
    font-size: 0;
    line-height: 0;
    top: 30px;
    left: 20px;

    &::after {
      content: " ";
      position: absolute;
      width: 0;
      height: 0;
      border-width: 7px;
      z-index: 1;
      border-style: dashed dashed solid;
      border-color: transparent transparent #ffffff;
      font-size: 0;
      line-height: 0;
      top: -5px;
      left: -7px;
    }
  }
}
</style>