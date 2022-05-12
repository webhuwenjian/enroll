import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs';
// 引入UI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueSeamlessScroll from 'vue-seamless-scroll'
Vue.use(VueSeamlessScroll)

Vue.config.productionTip = false
axios.defaults.baseURL="http://139.224.188.129:3000"
/* axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; */
Vue.prototype.$http = axios
Vue.prototype.$qs = qs;
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
