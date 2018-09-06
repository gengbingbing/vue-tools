import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import echarts from 'echarts'

import store from './store.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
import '@/assets/css/style.css'
import 'echarts/map/js/china'
import $ from 'jquery'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
