
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
    <vp-input
      type="text"
      placeholder="请输入信息"
      v-model="username"
      @input="inputHandle"
    />
    <vp-input type="password" v-model="password" />
    <vp-input type="text" placeholder="请输入信息" disabled />
    <vp-input type="text" placeholder="可清空信息" v-model="text" clearable />
    <vp-input
      type="textarea"
      v-model="textarea"
      @blur="blur"
      @focus="focus"
      @input="textareaInputHandle"
    />
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
    <!-- form -->
    <vp-form :model="form" :rules="rules" ref="form">
      <vp-form-item label="用户名：" prop="name">
        <vp-input placeholder="请输入用户名" v-model="form.name"></vp-input>
      </vp-form-item>
      <vp-form-item label="爱好：" prop="hobby">
        <vp-input v-model="form.hobby"></vp-input>
      </vp-form-item>
      <vp-form-item>
        <vp-button @submit="submitForm">提交</vp-button>
      </vp-form-item>
    </vp-form>
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
      form: {
        name: "",
        hobby: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: ["input", "blur"],
          },
        ],
        hobby: [
          { required: true, message: "请输入爱好", trigger: ["input", "blur"] },
        ],
      },
    };
  },
  components: {
    VpRadioGroup,
    VpSwitch,
    /*     vpButton,
    vpInput,
    vpRadio */
  },
  mounted() {},
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
    },
    submitForm(value) {
      console.log(value);
      let form = this.$refs.form;
      form.validate((valid) => {
        if (valid) {
          console.log("校验成功！");
        } else {
          console.log("校验失败！");
        }
      });
    },
  },
};
</script>

<style scoped>
/* .vp-input {
  width: 200px !important;
} */
</style>
