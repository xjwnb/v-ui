
import Vue from 'vue'
import App from './App.vue'

import "./assets/iconfont/iconfont.css"


import "./App.less";
import vpButton from './components/vp-button';
import vpInput from './components/vp-input';
import vpRadio from './components/vp-radio';
import vpRadioGroup from './components/vp-radio-group.vue';

Vue.component(vpButton.name, vpButton);
Vue.component(vpInput.name, vpInput);
Vue.component(vpRadio.name, vpRadio);
Vue.component(vpRadioGroup.name, vpRadioGroup);





Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
