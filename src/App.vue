
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
    <vp-button type="primary" icon="iconfont icon-redupaixu">icon - primary按钮</vp-button>
    <vp-button type="primary"><span class="iconfont icon-redupaixu"></span></vp-button>
    <vp-button type="primary" disabled>primary - disabled 按钮 </vp-button>
    <!-- input -->
    <vp-input type="text" placeholder="请输入信息" v-model="username" />
    <vp-input type="password" v-model="password" />
    <vp-input type="text" placeholder="请输入信息" disabled />
    <vp-input type="text" placeholder="可清空信息" v-model="text" clearable />
    <vp-input type="textarea" v-model="textarea" @blur="blur" @focus="focus" />
    <vp-input @blur="blur" @focus="focus" />
  </div>
</template>

<script>
import vpButton from './components/vp-button';
import vpInput from './components/vp-input';

export default {
  name: 'App',
  data() {
    return {
      username: "小卡车",
      password: "",
      text: "",
      textarea: ""
    }
  },
  components: {
    vpButton,
    vpInput
  },
  methods: {
    clickHandle(e) {
      console.log(e);
    },
    focus(e) {
      console.log(e);
    },
    blur(e) {
      console.log(e);
    } 
  }
}
</script>

<style scoped>
.vp-input {
  width: 200px;
  margin: 0 10px;
}
</style>
