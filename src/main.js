/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-05 00:56:32
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-17 19:09:05
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global from "@/utils/global" //全局方法

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(global);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')