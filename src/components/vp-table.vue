
<template>
  <div class="vp-table">
    <!-- <div class="vp-table-head"> -->
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <slot></slot>
        </tr>
      </thead>
      <tbody v-if="columnOrder">
        <tr v-for="(tdata, tindex) in data" :key="tdata.id || tindex"
          :class="{ 'vp-table-even-tr-stripe': stripe && (tindex % 2 != 0) ? true : false }">
          <!-- -->

          <template v-for="(column, index) in columnOrder">
            <!-- :key="index" -->
            <template v-if="!hasSlots.includes(index)" class="cell">
              <!-- {{ tdata[column] }} -->
              <vp-table-column
                :index="tindex"
                :content="tdata[column]"
              ></vp-table-column>
            </template>
            <td v-if="hasSlots.includes(index)">
              <!-- <vp-slots :vnode="$slots.default[index].child.$slots.default[0]"></vp-slots> -->
              <!-- <vp-slots :vnode="$slots.default[index].child"></vp-slots> -->
              <!-- <vp-slots :vnode="$slots" :index="index"></vp-slots> -->
              <!-- <vp-table-column :index="tindex"> -->
              <vp-slots
                :vnode="slots"
                :data="data"
                :index="index"
                :rowIndex="tindex"
              ></vp-slots>
              <!-- </vp-table-column> -->
            </td>
          </template>
        </tr>
      </tbody>
      <!-- </table> -->
      <!-- </div> -->
      <!-- <div class="vp-table-body"> -->
      <!-- <table> -->

      <!-- <tbody v-if="columnOrder"> -->
      <!-- <tr v-for="(tdata, tindex) in data" :key="tdata.id"> -->

      <!-- <td v-for="(column, index) in columnOrder" :key="index" style="{width: 50%}">
              <div class="cell">
                {{ tdata[column] }}
              </div>
            </td> -->

      <!--           <template v-for="(column, index) in columnOrder">
            <vp-table-column
              isBody
              :content="tdata[column]"
              :key="index"
              :index="tindex"
            >
            </vp-table-column>
          </template>
        </tr>
      </tbody> -->
    </table>
    <!-- </div> -->
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
      default: false
    }
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
        return createElement(
          "div",
          this.vnode.default[this.index].child.$scopedSlots.data({
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
    // console.log(this.$slots.default[2]);
    console.log(this.$el.getElementsByTagName("th"));
    let th = this.$el.getElementsByTagName("th");
    console.log(this.hasSlots);
    this.hasSlots.forEach((item) => {
      // console.log(item);
      let shouldRemove = th[item].childNodes[0].childNodes[1];
      console.log(shouldRemove);
    });
    for (let i = 0, l = th.length; i < l; i++) {
      console.log(th[i]);
      if (th[i].childNodes[0].childNodes[1]) {
        th[i].childNodes[0].childNodes[1].remove();
      }
    }
    /*     console.log(this);
    console.log(this.$slots.default[2]);
    console.log(this.$slots.default[2].child.$slots.default[0]);
    console.log(this._render(this.$slots.default[2].child.$slots.default[0])); */
    this.$slots.default.forEach((slot, slotIndex) => {
      this.columnOrder.push(slot.child.prop);

      if (slot.child.$scopedSlots.data) {
        this.hasSlots.push(slotIndex);
        // console.log(slotIndex);
        // console.log(slot.child.$slots.default[0]);
      }
    });
    console.log(this.data);

    // hasSlots
  },
  methods: {
    // hasTableColumnSlots(index) {
    /* if (this.$slots.default[index].child) {
        // console.log(this.$slots.default[index].child);
        // console.log(this.$slots.default[index].child.$slots.default);
        return !!this.$slots.default[index].child.$slots.default;
      } */
    // return false;
    // },
  },
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
  transition: all .5s;
}
.vp-table-even-tr-stripe {
  background-color: #FAFAFA;
}
.vp-table tbody tr:hover {
  background-color: #f6f8fa;
}
/* .vp-table tr {
  border-bottom: 1px solid #909399;
} */
</style>