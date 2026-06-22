//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'
//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index.js'
//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
//创建Vue实例---vm
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
