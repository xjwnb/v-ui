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
  </div>
</template>

<script>
import vpButton from './components/vp-button';

export default {
  name: 'App',
  components: {
    vpButton
  },
  methods: {
    clickHandle(e) {
      console.log(e);
    }
  }
}
</script>

<style>
</style>
