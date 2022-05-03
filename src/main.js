import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入UI组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueSeamlessScroll from 'vue-seamless-scroll'
Vue.use(VueSeamlessScroll)

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
