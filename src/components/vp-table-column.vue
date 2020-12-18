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
  <!-- <td> -->
    <div class="cell" v-if="content">
      {{ content }}

      <!-- <slot></slot> -->
    </div>
    <div class="cell" v-else>
      <!-- <slot v-bind:data="data">
      </slot> -->
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
    console.log(this.$slots);
    // console.log(this.$scopedSlots);
    if (this.$scopedSlots.data) {
      // this.$scopedSlots.data({data: this.data});
      // console.log(this.$scopedSlots);
    }
    this.$nextTick(() => {
      // console.log(this.$slots);
      console.log(this.VpTable.$slots.default.length);
    });
    // console.log(this.VpTable.data[this.index]);
  },
};
</script>
<style scoped>
th {
  text-align: left;
}
/* th .cell {
  padding: 0 20px;
}
td .cell {
  padding: 0 20px;
} */
</style>