<template>
  <div class="vp-radio"
    :class="{ 'vp-radio-isChecked': value === label,
              'vp-radio-isDisabled': disabled,
              'vp-radio-isBorder': border}">
    <input type="radio"
      :id="label"
      :value="label"
      class="vp-radio-inner"
      v-model="model"
      :disabled="disabled" 
      :checked="value === label"
      @change="changeHandle">
      <label :for="label">
        <span>
          <slot>radio</slot>
          <template v-if="!$slots.default"> 
            {{ label }}
          </template>
        </span>
      </label>
    </input>
  </div>
</template>

<script>
export default {
  name: "vpRadio",
  inject: {
    vpRadioGroup: {
      default: ""
    }
  },
  props: {
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    model: {
      get() {
        return this.vpRadioGroup ? this.vpRadioGroup.value : this.value;
      },
      set(value) {
        this.vpRadioGroup ? this.vpRadioGroup.$emit("input", value) : this.$emit("input", value);
      },
    },
  },
  methods: {
    changeHandle(e) {
      this.$emit("change", e);
    },
  },
};
</script>
<style lang="less" scoped>
.vp-radio {
  display: inline-block;

  span {
    cursor: pointer;
    padding-left: 5px;
  }
}
.vp-radio-isChecked {
  color: rgb(0, 140, 255);
}
.vp-radio-isDisabled {
  color: rgb(172, 172, 172);
  cursor: not-allowed;
  span {
    cursor: not-allowed;
  }
}
.vp-radio-isBorder {
  border-radius: 3px;
  border: 1px solid rgb(0, 140, 255);
  outline: none;
  padding: 3px 7px;
  cursor: pointer;
}
</style>