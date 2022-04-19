// 该项目是项目入口文件
// 引入Vue
import Vue from 'vue'
// 1 引入App组件，他是所有组件的父组件  2 注册，3 应用
import App from './App.vue'
// 引用vue-router
import VueRouter from "vue-router"
// 引入路由器
import router from "./router/index.js"

//关闭vue的生成提示
Vue.config.productionTip = false

// 应用后就有了router
Vue.use(VueRouter)

// 创建Vue的实例对象 vm
new Vue({
    //将App组件放入容器中
    render: h => h(App),
    router: router

}).$mount('#app')