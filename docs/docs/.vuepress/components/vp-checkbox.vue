<!--
 * @Author: your name
 * @Date: 2020-12-10 19:58:36
 * @LastEditTime: 2020-12-11 18:47:47
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\components\vp-checkbox.vue
-->
<template>
  <div class="vp-checkbox"
    :class="{'vp-checked-disabled': disabled}">
    <input
      class="vp-checkbox-inner"
      :id="label || $slots.default[0].text"
      type="checkbox"
      :value="label"
      v-model="checkboxModel"
      :disabled="disabled"
    />
    <label :for="label || $slots.default[0].text">{{
      label || $slots.default[0].text
    }}</label>
  </div>
</template>

<script>
export default {
  name: "vpCheckbox",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    };
  },
  inject: {
    vpCheckboxGroup: {
      default: {},
    },
  },
  computed: {
    isGroup() {
      return !!Object.keys(this.vpCheckboxGroup).length;
    },
    checkboxModel: {
      get() {
        return this.isGroup ? this.vpCheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.vpCheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    isChecked() {
      return this.isGroup ? this.checkboxModel.includes(this.label) : this.value;
    }
  },

  created() {},
  mounted() {
  },
  methods: {
  },
};
</script>
<style scoped>
.vp-checkbox {
  display: inline-block;
}
.vp-checkbox-checked {
  color: #0075FF;
}
.vp-checked-disabled {
  color: #D1D1D1;
}
</style>