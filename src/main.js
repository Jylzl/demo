/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-05 00:56:32
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-18 21:59:44
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import global from "@/utils/global" //全局方法
import AvueFormDesign from 'avue-plugin-formdesign'
import AvueUeditor from 'avue-plugin-ueditor'
import AvueMap from 'avue-plugin-map'
import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'
import splitPane from 'vue-splitpane'
import VueAMap from 'vue-amap';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(global);
Vue.use(AvueFormDesign);
Vue.use(AvueUeditor);
Vue.use(AvueMap);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '4d73249f0948da6c9d5bfc507ff59cf0',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  uiVersion: '1.0',
  v: '1.4.4'
});
Vue.use(FormMaking)
Vue.component('split-pane', splitPane);

Vue.use(window.AVUE, {
  size: 'medium',
  menuType: 'text'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')