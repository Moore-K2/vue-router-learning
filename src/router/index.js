//该文件专门用于创建整个应用的路由器
// 引入router
import VueRouter from "vue-router";

// 引入路由组件
import About from "../components/About.vue"
import Home from "../components/Home.vue"

//创建router实例对象路由器，去管理一组一组的路由(key-value)规则
const router = new VueRouter({
    routes: [{
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home
        },
    ]
})

// 暴露
export default router