
<template>
  <div class="vp-radio"
    :class="{ 'vp-radio-isChecked': value === label,
              'vp-radio-isDisabled': disabled }">
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
  props: {
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    disabled: {
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
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    changeHandle(e) {
      this.$emit("change", this.label);
    },
  },
};
</script>
<style lang="less" scoped>
.vp-radio {
  display: inline-block;

  span {
    cursor: pointer;
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
</style>