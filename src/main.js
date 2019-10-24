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
import avueFormDesign from 'avue-plugin-formdesign'
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(global);
Vue.use(avueFormDesign);
Vue.use(FormMaking)

Vue.use(window.AVUE, {
  size: 'medium',
  menuType: 'text'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')