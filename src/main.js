/*
 * @Author: your name
 * @Date: 2020-12-07 19:10:19
 * @LastEditTime: 2020-12-13 16:32:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \v-ui\src\main.js
 */

import Vue from 'vue'
import App from './App.vue'

import "./assets/iconfont/iconfont.css"


import "./App.less";
import VpButton from './components/vp-button';
import VpInput from './components/vp-input';
import VpRadio from './components/vp-radio';
import VpRadioGroup from './components/vp-radio-group.vue';
import VpSwitch from './components/vp-switch.vue';
import VpForm from './components/vp-form.vue';
import VpFormItem from './components/vp-form-item.vue';
import VpContainer from './components/vp-container.vue';
import VpHeader from './components/vp-header.vue';
import VpFooter from './components/vp-footer.vue';
import VpMain from './components/vp-main.vue';
import VpAside from './components/vp-aside.vue';
import VpCheckbox from './components/vp-checkbox.vue';
import VpCheckboxGroup from './components/vp-checkbox-group.vue';
import VpImage from './components/vp-image.vue';
import VpMenu from './components/vp-menu.vue';
import VpMenuItem from './components/vp-menu-item.vue';
import VpSubmenu from './components/vp-submenu.vue';

Vue.component(VpButton.name, VpButton);
Vue.component(VpInput.name, VpInput);
Vue.component(VpRadio.name, VpRadio);
Vue.component(VpRadioGroup.name, VpRadioGroup);
Vue.component(VpSwitch.name, VpSwitch);
Vue.component(VpForm.name, VpForm);
Vue.component(VpFormItem.name, VpFormItem);
Vue.component(VpContainer.name, VpContainer);
Vue.component(VpHeader.name, VpHeader);
Vue.component(VpFooter.name, VpFooter);
Vue.component(VpMain.name, VpMain);
Vue.component(VpAside.name, VpAside);
Vue.component(VpCheckbox.name, VpCheckbox);
Vue.component(VpCheckboxGroup.name, VpCheckboxGroup);
Vue.component(VpImage.name, VpImage);
Vue.component(VpMenu.name, VpMenu);
Vue.component(VpMenuItem.name, VpMenuItem);
Vue.component(VpSubmenu.name, VpSubmenu);

Vue.prototype.$bus = new Vue();

// loading
import vploading from  './components/loading/loading';
Vue.use(vploading);

// message
import VpMessage from './components/message/message';
Vue.use(VpMessage);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
