
import Vue from 'vue'
import App from './App.vue'

import "./assets/iconfont/iconfont.css"


import "./App.less";
import vpButton from './components/vp-button';
import vpInput from './components/vp-input';
import vpRadio from './components/vp-radio';
import vpRadioGroup from './components/vp-radio-group.vue';
import vpSwitch from './components/vp-switch.vue';
import vpForm from './components/vp-form.vue';
import vpFormItem from './components/vp-form-item.vue';

Vue.component(vpButton.name, vpButton);
Vue.component(vpInput.name, vpInput);
Vue.component(vpRadio.name, vpRadio);
Vue.component(vpRadioGroup.name, vpRadioGroup);
Vue.component(vpSwitch.name, vpSwitch);
Vue.component(vpForm.name, vpForm);
Vue.component(vpFormItem.name, vpFormItem);

Vue.prototype.$bus = new Vue();



Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
