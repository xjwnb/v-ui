
<template>
  <div class="vp-table">
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <slot></slot>
        </tr>
      </thead>
      <tbody v-if="columnOrder">
        <tr
          v-for="(tdata, tindex) in data"
          :key="tdata.id || tindex"
          :class="{
            'vp-table-even-tr-stripe': stripe && tindex % 2 != 0 ? true : false,
          }"
        >
          <template v-for="(column, index) in columnOrder">
            <template v-if="!hasSlots.includes(index)" class="cell">
              <vp-table-column
                :index="tindex"
                :content="tdata[column]"
              ></vp-table-column>
            </template>
            <td v-if="hasSlots.includes(index)">
              <vp-slots
                :vnode="slots"
                :data="data"
                :index="index"
                :rowIndex="tindex"
              ></vp-slots>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VpTableColumn from "./vp-table-column";

export default {
  name: "VpTable",
  provide() {
    return {
      VpTable: this,
    };
  },
  props: {
    data: {
      type: Array,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VpTableColumn,
    VpSlots: {
      props: {
        vnode: {},
        index: Number,
        rowIndex: Number,
        data: null,
      },
      created() {},
      render(createElement) {
        let filterSlots = this.vnode.default.filter(item => item.tag !== undefined);
        return createElement(
          "div",
          filterSlots[this.index].child.$scopedSlots.data({
            data: this.data[this.rowIndex],
            $index: this.rowIndex,
          })
        );
      },
    },
  },
  computed: {},
  data() {
    return {
      tbodyData: null,
      columnOrder: [],
      hasSlots: [],
      slots: null,
    };
  },
  created() {},
  mounted() {
    this.slots = this.$slots;
    let th = this.$el.getElementsByTagName("th");
    this.hasSlots.forEach((item) => {
      let shouldRemove = th[item].childNodes[0].childNodes[1];
    });
    for (let i = 0, l = th.length; i < l; i++) {
      if (th[i].childNodes[0].childNodes[1]) {
        th[i].childNodes[0].childNodes[1].remove();
      }
    }
    this.$slots.default.filter(item => item.tag !== undefined).forEach((slot, slotIndex) => {
      /* this.columnOrder.push(slot.child.prop);
      if (slot.child.$scopedSlots.data) {
        this.hasSlots.push(slotIndex);
      } */
      if (slot.child) {
        this.columnOrder.push(slot.child.prop);
      } else {
        this.columnOrder.push(undefined);
      }

      if (slot.child) {
        if (slot.child.$scopedSlots.data) {
          this.hasSlots.push(slotIndex);
        }
      }
    });
  },
  methods: {},
};
</script>
<style scoped>
.vp-table table {
  width: 100%;
  margin: 10px;
}
.vp-table thead {
  color: #909399;
}
.vp-table th,
td {
  padding: 20px;
  border-bottom: 1px solid #ebeef5;
}
.vp-table tbody tr {
  transition: all 0.5s;
}
.vp-table-even-tr-stripe {
  background-color: #fafafa;
}
.vp-table tbody tr:hover {
  background-color: #f6f8fa;
}
/* .vp-table tr {
  border-bottom: 1px solid #909399;
} */
</style>