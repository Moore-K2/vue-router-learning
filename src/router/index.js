//该文件专门用于创建整个应用的路由器
// 引入router
import VueRouter from "vue-router";

// 引入路由组件
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import News from "../pages/News.vue"
import Message from "../pages/Message.vue"
import Detail from "../pages/Detail.vue"


//创建router实例对象路由器，去管理一组一组的路由(key-value)规则
const router = new VueRouter({
    routes: [{
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            // 通过children配置子路由
            children: [{
                    path: "news", //这儿不要写/news
                    component: News,
                },
                {
                    path: 'message',
                    component: Message,
                    children: [{
                        path: "detail",
                        component: Detail
                    }]
                }
            ]
        },
    ]
})

// 暴露
export default router