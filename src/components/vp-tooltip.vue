<template>
  <div class="vp-tooltip">
    <span
      v-show="isShowTooltip"
      :class="[
        'vp-tooltip-inner',
        'vp-tooltip-dark',
        `vp-tooltip-${placement}`,
      ]"
      >{{ content }}</span
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "VpTooltip",
  props: {
    placement: {
      type: String,
      default: "top",
    },
    content: {
      type: String,
      default: "tooltip",
    },
  },
  data() {
    return {
      isShowTooltip: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    let slotEle = this.$slots.default[0].elm;
    slotEle.addEventListener("mouseenter", () => {
      let placement = this.placement;
      if (placement === "right") {
        let tooltipInner = this.$el.getElementsByClassName(
          "vp-tooltip-inner"
        )[0];
        tooltipInner.style.left = `${slotEle.offsetWidth + 12}px`;
      } else if (placement === "top") {
/*         console.log(this.$el);
        console.log(this.$el.offsetHeight);
        console.log(
          this.$el.getElementsByClassName("vp-tooltip-inner")[0].offsetHeight
        ); */
      }
      this.isShowTooltip = true;
    });
    slotEle.addEventListener("mouseleave", () => {
      this.isShowTooltip = false;
    });
  },
};
</script>
<style scoped>
.vp-tooltip {
  position: relative;
}
.vp-tooltip-inner {
  position: absolute;
  padding: 10px 15px;
  border-radius: 5px;
}
/* dark */
.vp-tooltip-dark {
  background-color: #000000;
  color: #ffffff;
}
/* top */
.vp-tooltip-top {
  bottom: 130%;
  left: 50%;
  transform: translateX(-50%);
  line-height: 100%;
}
.vp-tooltip-top::before {
  content: "";
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: #000000 transparent transparent;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
}
/* bottom */
.vp-tooltip-bottom {
  top: 130%;
  left: 50%;
  transform: translateX(-50%);
}
.vp-tooltip-bottom::before {
  content: "";
  width: 0;
  height: 0;
    border: 10px solid;
  border-color: transparent transparent #000000;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -33%;
}
/* left */
.vp-tooltip-left {
  transform: translateX(-110%);
}
.vp-tooltip-left::before {
  content: "";
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: transparent transparent transparent #000000;
  position: absolute;
  left: 100%;
}
/* right */
.vp-tooltip-right {
  line-height: 100%;
}
.vp-tooltip-right::before {
  content: "";
  width: 0;
  height: 0;
  border: 10px solid;
  border-color: transparent #000000 transparent transparent;
  position: absolute;
  left: -20%;
}
</style>