
import Vue from 'vue';

// 引入 icontfont 样式
import './public/iconfont/iconfont.css';

// 事件总线
Vue.prototype.$bus = new Vue();

// 插件
import vploading from './components/loading/loading';
Vue.use(vploading);

import VpMessage from './components/message/message';
Vue.use(VpMessage);