<template>
  <th v-if="label">
    <div class="cell">
      {{ label }}
      <slot v-bind:data="data" name="data">
        {{ data }}
      </slot>
    </div>
  </th>
  <td v-else>
    <div class="cell" v-if="content">
      {{ content }}
    </div>
    <div class="cell" v-else>
    </div>
  </td>
</template>

<script>
export default {
  name: "VpTableColumn",
  inject: {
    VpTable: {
      default: {},
    },
  },
  props: {
    prop: {
      type: String,
    },
    label: {
      type: String,
    },
    isBody: {
      type: Boolean,
      default: false,
    },
    content: {
      type: [String, Number],
    },
    index: {
      type: [String, Number],
    },
  },
  data() {
    return {
      data: this.VpTable.data[this.index],
    };
  },
  created() {},
  mounted() {
  },
};
</script>
<style scoped>
th {
  text-align: left;
}
</style>