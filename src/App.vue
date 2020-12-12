
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
        <vp-input
          placeholder="请输入用户名"
          v-model="form.name"
          @input="inputFormHandle"
        ></vp-input>
      </vp-form-item>
      <vp-form-item label="爱好：" prop="hobby">
        <vp-input v-model="form.hobby"></vp-input>
      </vp-form-item>
      <vp-form-item label="性别：">
        <vp-switch v-model="form.sex"></vp-switch>
      </vp-form-item>
      <vp-form-item>
        <vp-checkbox-group v-model="form.checkboxGroup">
          <vp-checkbox label="LOL"></vp-checkbox>
          <vp-checkbox label="使命召唤"></vp-checkbox>
        </vp-checkbox-group>
      </vp-form-item>
      <vp-form-item>
        <vp-button @submit="submitForm">提交</vp-button>
      </vp-form-item>
    </vp-form>
    <!-- container -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-main>Main</vp-main>
      </vp-container>
      <vp-footer>Footer</vp-footer>
    </vp-container>
    <br />
    <!-- container - 1 -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-container>
          <vp-main>Main</vp-main>
          <vp-footer>Footer</vp-footer>
        </vp-container>
      </vp-container>
    </vp-container>
    <br />
    <!-- container - 2 -->
    <vp-container>
      <vp-header>Header</vp-header>
      <vp-container>
        <vp-aside>Aside</vp-aside>
        <vp-main>Main</vp-main>
      </vp-container>
    </vp-container>
    <br />
    <!-- container - 3 -->
    <vp-container>
      <vp-aside>Aside</vp-aside>
      <vp-container>
        <vp-header>Header</vp-header>
        <vp-main>Main</vp-main>
        <vp-footer>Footer</vp-footer>
      </vp-container>
    </vp-container>
    <!-- checkbox - group -->
    <vp-checkbox-group v-model="checkboxGroup">
      <vp-checkbox label="LOL"></vp-checkbox>
      <vp-checkbox label="使命召唤"></vp-checkbox>
    </vp-checkbox-group>
    <!-- checkbox -->
    <vp-checkbox v-model="checkbox" disabled>lol</vp-checkbox>
    <div id="loading"></div>
    <div class="test">
      testMessage
      <div class="tt"></div>
    </div>
    <!-- image -->
    <vp-image :src="img"></vp-image>
    <vp-image>
      <template v-slot:error>
        <div>error</div>
      </template>
    </vp-image>
    <div class="img-list">
      <vp-image v-for="img in imgList" :key="img.id" :src="img.src"></vp-image>
    </div>
    <div class="img">
      <div class="img-list1">
        <vp-image
          v-for="img in imgList1"
          :key="img.id"
          :src="img.src"
          width="500px"
          height="400px"
          lazy
        ></vp-image>
      </div>
    </div>
    <div class="img-list2">
      <vp-image v-for="img in imgList" :key="img.id" :src="img.src" :previewSrc="img.src" ></vp-image>
    </div>
  </div>
</template>

<script>
import VpAside from "./components/vp-aside.vue";
import VpRadioGroup from "./components/vp-radio-group.vue";
import VpRadio from "./components/vp-radio.vue";
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
        sex: false,
        checkboxGroup: [],
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
      checkboxGroup: ["LOL", "使命召唤"],
      checkbox: false,
      img:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      imgList: [
        {
          id: 1,
          src:
            "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
        },
        {
          id: 2,
          src:
            "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
        },
        {
          id: 3,
          src:
            "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
        },
      ],
      imgList1: [
        {
          id: 4,
          src:
            "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
        },
        {
          id: 5,
          src:
            "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
        },
        {
          id: 6,
          src:
            "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
        },
      ],
    };
  },
  components: {
    /*     VpRadioGroup,
    VpSwitch,
    VpAside,
    VpRadio, */
    /*     vpButton,
    vpInput,
    vpRadio */
  },
  mounted() {
    let loadObj = this.$loading({
      // ele: document.getElementsByClassName("test")[0],
      color: "#00a8ff",
      iconfont: "icon-redupaixu",
      // backgroundColor: "#e67e22"
    });
    setTimeout(() => {
      loadObj.close();
    }, 1000);
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
    },
    submitForm(value, e) {
      let form = this.$refs.form;
      form.validate((valid) => {
        if (valid) {
          console.log("校验成功！");
          console.log(value);
        } else {
          console.log("校验失败！");
        }
      });
    },
    inputFormHandle(value, event) {
      // console.log(value);
    },
  },
};
</script>

<style scoped>
/* .vp-input {
  width: 200px !important;
} */
.vp-header {
  background-color: aqua;
  text-align: center;
  line-height: 60px;
}
.vp-main {
  background-color: aquamarine;
  text-align: center;
}
.vp-aside {
  background-color: cornflowerblue;
  text-align: center;
}
.vp-footer {
  background-color: cadetblue;
  text-align: center;
  line-height: 60px;
}
.test {
  background-color: royalblue;
  width: 200px;
  height: 200px;
}
</style>
