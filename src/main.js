
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
import vpContainer from './components/vp-container.vue';
import vpHeader from './components/vp-header.vue';
import vpFooter from './components/vp-footer.vue';
import vpMain from './components/vp-main.vue';
import vpAside from './components/vp-aside.vue';
import vpCheckbox from './components/vp-checkbox.vue';
import vpCheckboxGroup from './components/vp-checkbox-group.vue';

Vue.component(vpButton.name, vpButton);
Vue.component(vpInput.name, vpInput);
Vue.component(vpRadio.name, vpRadio);
Vue.component(vpRadioGroup.name, vpRadioGroup);
Vue.component(vpSwitch.name, vpSwitch);
Vue.component(vpForm.name, vpForm);
Vue.component(vpFormItem.name, vpFormItem);
Vue.component(vpContainer.name, vpContainer);
Vue.component(vpHeader.name, vpHeader);
Vue.component(vpFooter.name, vpFooter);
Vue.component(vpMain.name, vpMain);
Vue.component(vpAside.name, vpAside);
Vue.component(vpCheckbox.name, vpCheckbox);
Vue.component(vpCheckboxGroup.name, vpCheckboxGroup);

Vue.prototype.$bus = new Vue();

import vploading from  './components/loading';
Vue.use(vploading);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
