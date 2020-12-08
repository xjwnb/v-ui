
<template>
  <div id="app">
    <!-- 按钮 -->
    <vp-button type="default">default</vp-button>
    <vp-button type="primary">primary</vp-button>
    <vp-button type="success">success</vp-button>
    <vp-button type="info">info</vp-button>
    <vp-button type="warning">warning</vp-button>
    <vp-button type="danger">danger</vp-button>
    <vp-button type="primary" round>round - primary按钮</vp-button>
    <vp-button type="primary" @click="clickHandle">click-primary按钮</vp-button>
    <vp-button type="primary" icon="iconfont icon-redupaixu"
      >icon - primary按钮</vp-button
    >
    <vp-button type="primary"
      ><span class="iconfont icon-redupaixu"></span
    ></vp-button>
    <vp-button type="primary" disabled>primary - disabled 按钮 </vp-button>
    <!-- input -->
    <vp-input type="text" placeholder="请输入信息" v-model="username" @input="inputHandle" />
    <vp-input type="password" v-model="password" />
    <vp-input type="text" placeholder="请输入信息" disabled />
    <vp-input type="text" placeholder="可清空信息" v-model="text" clearable />
    <vp-input type="textarea" v-model="textarea" @blur="blur" @focus="focus" @input="textareaInputHandle" />
    <vp-input @blur="blur" @focus="focus" />
    <!-- radio -->
    <vp-radio v-model="radio1" label="loll">LOL</vp-radio>
    <vp-radio v-model="radio1" label="L" disabled>L</vp-radio>
    <vp-radio v-model="radio1" label="A" @change="changeHandle">A</vp-radio>
    <vp-radio v-model="radio1" label="B" border>B</vp-radio>
    <!-- radio-group -->
    <vp-radio-group v-model="radio1">
      <vp-radio label="loll">LOL</vp-radio>
      <vp-radio label="L" disabled>L</vp-radio>
      <vp-radio label="A" @change="changeHandle">A</vp-radio>
      <vp-radio label="B" border>B</vp-radio>
    </vp-radio-group>
    <!-- switch -->
    <vp-switch v-model="switchValue" @change="changeHandle" disabled />
    <vp-switch v-model="switchValue" @change="changeHandle" />
  </div>
</template>

<script>
import VpRadioGroup from "./components/vp-radio-group.vue";
import VpSwitch from "./components/vp-switch.vue";

export default {
  name: "App",
  data() {
    return {
      username: "小卡车",
      password: "",
      text: "",
      textarea: "",
      radio1: "loll",
      switchValue: false,
    };
  },
  components: {
    VpRadioGroup,
    VpSwitch,
    /*     vpButton,
    vpInput,
    vpRadio */
  },
  methods: {
    inputHandle(e) {
      console.log(e);
    },
    clickHandle(e) {
      console.log(e);
    },
    focus(e) {
      console.log(e);
    },
    blur(e) {
      console.log(e);
    },
    changeHandle(e) {
      console.log(e);
    },
    textareaInputHandle(value) {
      console.log(value);
    }
  },
};
</script>

<style scoped>
.vp-input {
  width: 200px !important;
}
</style>
