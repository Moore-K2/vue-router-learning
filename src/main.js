// 该项目是项目入口文件
// 引入Vue
import Vue from 'vue'
// 1 引入App组件，他是所有组件的父组件  2 注册，3 应用
import App from './App.vue'
// 引用vue-router
import VueRouter from "vue-router"
// 引入路由器
import router from "./router/index.js"

//全部引入
// 引入element-ui组件库
import ElementUI from 'element-ui';
// 引入element - ui的全部样式
import 'element-ui/lib/theme-chalk/index.css';

//关闭vue的生成提示
Vue.config.productionTip = false

// 应用后就有了router
Vue.use(VueRouter)
Vue.use(ElementUI)

// 创建Vue的实例对象 vm
new Vue({
    //将App组件放入容器中
    render: h => h(App),
    router: router,

    // 安装全局事件总线--适用于任意组件间通信
    beforeCreate() {
        Vue.prototype.$bus = this // $bus就是当前应用的vm
    }

}).$mount('#app')