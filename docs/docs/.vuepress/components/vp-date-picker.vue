<template>
  <div class="vp-date-picker">
    <vp-input
      v-model="date"
      :placeholder="placeholder"
      @focus="handleInputFocus"
      @blur="handleInputBlur($event)"
    >
      <template v-slot:prefix>
        <span class="iconfont icon-rili"></span>
      </template>
    </vp-input>

    <!-- 弹出层 -->
    <transition name="slide-fade">
      <div :class="['vp-date-picker-container']" v-show="active">
        <!-- 当前日期 -->
        <div class="vp-date-picker_control">
          <!-- 左 -->
          <div class="date_left">
            <div class="date_pre_year" @click="handlePreYear">
              <span class="iconfont icon-jiantou_yemian_xiangzuo_o"></span>
            </div>
            <div class="date_pre_month" @click="handlePreMonth">
              <span class="iconfont icon-jiantou_liebiaoxiangzuo_o"></span>
            </div>
          </div>
          <!-- 内容 -->
          <div class="date_text">
            {{ currentTime.currentYear }} 年 {{ currentTime.currentMonth }} 月
          </div>
          <!-- 右 -->
          <div class="date_right">
            <div class="date_suffix_month" @click="handleSuffixMonth">
              <span class="iconfont icon-jiantou_liebiaoxiangyou_o"></span>
            </div>
            <div class="date_suffix_year" @click="handleSuffixYear">
              <span class="iconfont icon-jiantou_yemian_xiangyou_o"></span>
            </div>
          </div>
        </div>
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
                    dayList[(row - 1) * 7 + td - 1].day === nowDay &&
                    (row - 1) * 7 + td - 1 === currentDateIndex
                      ? 'currentTime__tb'
                      : '',
                  ]"
                  @click="
                    handleSelectDate(
                      dayList[(row - 1) * 7 + td - 1].day,
                      (row - 1) * 7 + td - 1,
                      $event
                    )
                  "
                >
                  <!-- :class="[ ? 'disabled_day' : '']" -->
                  <div
                    :class="[
                      pickerOption &&
                      pickerOption.disabledDate(
                        dayList[(row - 1) * 7 + td - 1].date
                      )
                        ? 'disabled_day'
                        : '',
                    ]"
                  >
                    <!-- &&
                        (row - 1) * 7 + td - 1 === selectDayIndex -->
                    <span
                      :class="[
                        'date_table_span',
                        currentTime.currentYear === selectYear &&
                        currentTime.currentMonth === selectMonth &&
                        dayList[(row - 1) * 7 + td - 1].day === selectDay &&
                        (row - 1) * 7 + td - 1 > preLastIndex &&
                        (row - 1) * 7 + td - 1 < suffixFirstIndex
                          ? 'select_time_tab'
                          : '',
                      ]"
                      >{{ dayList[(row - 1) * 7 + td - 1].day }}</span
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
export default {
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
    // picker-option
    pickerOption: {
      type: Object,
      default: () => {},
    },
    // align
    align: {
      type: String,
      default: "left",
    },
  },
  watch: {
    // value
    value: {
      handler(newVal) {
        console.log(newVal);
        let date = new Date(newVal);
        console.log(date.getFullYear(), date.getMonth(), date.getDate());
        let month = date.getMonth();
        let year = date.getFullYear();
        let day = date.getDate();
        let monthList = [1, 3, 5, 7, 8, 10, 12];
        if (month === 0 && day === 31) {
          month = 1;
        } else if (monthList.includes(month) && day === 31) {
          month += 1;
        } else if (!monthList.includes(month) && month !== 0 && day === 31) {
          month += 1;
        }
        this.date = `${year}-${month < 10 ? "0" + month : month}-${
          day < 10 ? "0" + day : day
        }`;
      },
    },

    // 当前日期变化
    currentTime: {
      handler(newVal) {
        this.getFullMonthDateList();
        // 当前选中索引
        for (let i = this.preLastIndex + 1; i < this.suffixFirstIndex; i++) {
          if (this.dayList[i] === this.selectDay) {
            this.selectDayIndex = i;
            break;
          }
        }
      },
      deep: true,
    },

    // picker-option
    pickerOption: {
      handler(newVal) {
        if (!newVal) return;
        // disabledDate
        console.log(newVal);
      },
      immediate: true,
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
      // 现在时间 day 索引
      currentDateIndex: "",
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
      // 当前点击是否在弹出层内部
      isClickContainer: false,
      // 选项
      option: {
        disabledDateFun: null,
      },
    };
  },
  created() {
    this.initPickerOption();
    this.initNowDate();
    this.getFullMonthDateList();
  },
  mounted() {
    this.handleMouseClick();
  },
  methods: {
    /**
     * 初始化 pickerOption
     */
    initPickerOption() {
      // if (!this.pickerOption) return;
      // console.log(this.pickerOption);
      // let disabled;
      // if (this.pickerOption?.disabledDate) {
      //   // disabled = this.pickerOption.disabledDate(new Date());
      //   this.option.disabledDateFun = this.pickerOption.disabledDate;
      // }
      // console.log(disabled);
    },

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
        // dayList.push(i);
        dayList.push({
          day: i,
          date: new Date(
            this.currentTime.currentYear,
            this.currentTime.currentMonth - 1,
            i
          ),
        });
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
      for (let i = 0; i < preDay; i++) {
        // dayList.unshift(preMonthLastDate - i);

        dayList.unshift({
          day: preMonthLastDate - i,
          date: new Date(
            this.currentTime.currentMonth === 1
              ? this.currentTime.currentYear - 1
              : this.currentTime.currentYear,
            this.currentTime.currentMonth === 1
              ? 11
              : this.currentTime.currentMonth - 1 - 1,
            preMonthLastDate - i
          ),
        });
      }
      let suffixLength = 42 - dayList.length;
      this.suffixFirstIndex = 42 - (42 - dayList.length);
      // 补充下一月剩余日期
      for (let i = 1; i <= suffixLength; i++) {
        // dayList.push(i);
        dayList.push({
          day: i,
          date: new Date(
            this.currentTime.currentMonth === 12
              ? this.currentTime.currentYear + 1
              : this.currentTime.currentYear,
            this.currentTime.currentMonth === 12
              ? 0
              : this.currentTime.currentMonth + 1 - 1,
            i
          ),
        });
      }
      this.currentDateIndex = dayList.findIndex(
        (item, index) =>
          index > this.preLastIndex &&
          index < this.suffixFirstIndex &&
          item.day === new Date().getDate()
      );
      // console.log(this.currentDateIndex);
      this.dayList = dayList;
    },

    /**
     * input blur
     */
    handleInputBlur(e, event) {
      // console.log(e, event);
      // this.active = false;
      this.$emit("blur", this);
    },

    /**
     * input focus
     */
    handleInputFocus() {
      this.active = true;
      this.$emit("focus", this);
    },

    /**
     * 点击选中日期
     */
    handleSelectDate(day, index, event) {
      // 设置不可点击
      if (
        event.target.parentElement.className === "disabled_day" ||
        event.target?.lastElementChild?.className === "disabled_day"
      ) {
        return;
      }
      // if (this.pickerOption && this.pickerOption.disabledDate) {
      //   let flag = this.pickerOption.disabledDate(this.dayList[index].time)
      //   if (flag) {
      //     return;
      //   }
      // }

      if (this.preLastIndex < index && index < this.suffixFirstIndex) {
        this.selectDayIndex = index;
        this.selectDay = day;
        this.selectYear = this.currentTime.currentYear;
        this.selectMonth = this.currentTime.currentMonth;
      } else if (index <= this.preLastIndex) {
        let currentMonth = this.currentTime.currentMonth;

        this.selectYear =
          currentMonth === 1
            ? this.currentTime.currentYear - 1
            : this.currentTime.currentYear;
        this.selectMonth =
          currentMonth - 1 < 1 ? 12 : this.currentTime.currentMonth - 1;
        this.selectDay = day;
        this.currentTime.currentMonth = this.selectMonth;
        this.currentTime.currentDate = day;
        this.currentTime.currentYear = this.selectYear;
      } else if (index >= this.suffixFirstIndex) {
        this.selectYear =
          this.currentTime.currentMonth === 12
            ? this.currentTime.currentYear + 1
            : this.currentTime.currentYear;
        this.selectMonth =
          this.currentTime.currentMonth === 12
            ? 1
            : this.currentTime.currentMonth + 1;
        this.currentTime.currentMonth =
          this.currentTime.currentMonth === 12
            ? 1
            : this.currentTime.currentMonth + 1;
        this.selectDay = day;
        this.currentTime.currentDate = day;
        this.currentTime.currentYear = this.selectYear;
        console.log(this.currentTime);
        console.log(this.selectYear, this.selectMonth, this.selectDay);
      }
      let monthList = [1, 3, 5, 7, 8, 10, 12];
      let selectMonth = this.selectMonth;
      if (monthList.includes(this.selectMonth) && this.selectDay === 31) {
        selectMonth -= 1;
      }
      // 触发修改 v-model
      this.$emit(
        "input",
        new Date(this.selectYear, selectMonth, this.selectDay)
      );
      this.$emit(
        "change",
        new Date(this.selectYear, selectMonth, this.selectDay)
      );
      // 隐藏弹出层
      this.active = false;
      console.log(this.selectYear, selectMonth, this.selectDay);
    },

    /**
     * 上一年 pre_year
     */
    handlePreYear() {
      this.currentTime.currentYear = this.currentTime.currentYear - 1;
    },

    /**
     * 下一年 suffix_year
     */
    handleSuffixYear() {
      this.currentTime.currentYear = this.currentTime.currentYear + 1;
    },

    /**
     * 上一月 pre_month
     */
    handlePreMonth() {
      let currentMonth = this.currentTime.currentMonth;
      if (currentMonth === 1) {
        this.currentTime.currentMonth = 12;
        this.currentTime.currentYear = this.currentTime.currentYear - 1;
      } else {
        this.currentTime.currentMonth = currentMonth - 1;
      }
    },

    /**
     * 下一月 suffix_year
     */
    handleSuffixMonth() {
      this.currentTime.currentYear =
        this.currentTime.currentMonth + 1 > 12
          ? this.currentTime.currentYear + 1
          : this.currentTime.currentYear;
      this.currentTime.currentMonth =
        this.currentTime.currentMonth + 1 > 12
          ? 1
          : this.currentTime.currentMonth + 1;
    },

    /**
     * 鼠标当前点击位置
     */
    handleMouseClick() {
      document.addEventListener(
        "mouseup",
        (e) => {
          let flag = this.findParent(
            e.target,
            this.$el.querySelector(".vp-date-picker-container")
          );
          if (flag) {
            this.active = true;
            this.isClickContainer = true;
          } else if (e.target !== this.$el.querySelector(".vp-input-inner")) {
            this.active = false;
            this.isClickContainer = false;
          } else if (e.target === this.$el.querySelector(".vp-input-inner")) {
            // this.isClickContainer = true;
            this.active = true;
            this.isClickContainer = false;
          } /* else {
          this.isClickContainer = true;
        } */
        },
        true
      );
    },

    /**
     * 递归当前元素的父元素是否为弹出层
     */
    findParent(target, parent) {
      if (!target) {
        return false;
      }
      if (target === parent || target?.parentElement === parent) {
        return true;
      }
      return this.findParent(target.parentElement, parent);
    },
  },
};
</script>

<style lang="less" scoped>
.vp-date-picker {
  position: relative;
  display: inline-block;

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

    .vp-date-picker_control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .date_left,
      .date_right {
        display: flex;
        align-items: center;

        span {
          font-size: 24px;
          cursor: pointer;

          &:hover {
            color: #409eff;
          }
        }
      }
    }

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
        border: none;
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
        border: none;
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

      .disabled_day {
        background-color: #f5f7fa;
        color: #c0c4cc;
        cursor: not-allowed;
        // pointer-events: none;

        &:hover {
          color: #c0c4cc;
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