//该文件专门用于创建整个应用的路由器
// 引入router
import VueRouter from "vue-router";

// 引入路由组件
import About from "../pages/About.vue"
import Home from "../pages/Home.vue"
import News from "../pages/News.vue"
import Message from "../pages/Message.vue"
import Detail from "../pages/Detail.vue"
import TodoList from "../pages/TodoList.vue"


//创建router实例对象路由器，去管理一组一组的路由(key-value)规则
const router = new VueRouter({
    // 默认模式hash，除了hash还有histor
    // mode: "hash",
    mode: "history",
    routes: [{
            name: "关于",
            path: '/about',
            component: About,
            meta: { title: "关于" }
        },
        {
            name: "主页",
            path: '/home',
            component: Home,
            meta: { title: "主页" },
            // 通过children配置子路由
            children: [{
                    name: "新闻",
                    path: "news", //这儿不要写/news
                    // 用于校验是否有权限
                    meta: { title: "新闻", isAuth: true },
                    component: News,
                    // 独享路由守卫
                    beforeEnter: (to, from, next) => {
                        // 鉴权-判断当前路由是否需要进行权限控制
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('school') === "成都理工") {
                                document.title = "新闻"
                                next()
                            } else {
                                alert("暂无权限查看！")
                            }
                        } else {

                            next()
                        }
                    }
                },
                {
                    name: "xinxi",
                    path: 'message',
                    component: Message,
                    // 用于校验是否有权限
                    meta: { isAuth: true, title: "信息" },
                    children: [{
                        // 给路由命名，命名后可以简化路径
                        name: 'xiangqing',
                        // path: "detail",
                        path: "detail/:id/:title/:content",
                        meta: { isAuth: true, title: "详情" },
                        component: Detail,
                        // props配置，让路由组件更方便的收到参数
                        //第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
                        props($route) {
                            return {
                                id: $route.params.id,
                                title: $route.params.title,
                                content: $route.params.content
                            }
                        }
                    }]
                }
            ]
        },
        // 配置todo-list路由
        {
            name: "todolist",
            path: "/todolist",
            component: TodoList,
            meta: { title: "待办事项" }
        }
    ]
})

// 全局前置路由守卫--每次路由切换之前调用（初始化时调用）
router.beforeEach((to, from, next) => {
    // console.log("去", to, "来自", from)
    //     // 设置路由title
    // document.title = to.meta.title || "摩尔庄园"
    // 放行
    // if (to.path === "/home/news" || to.path === "/home/message") {

    // 判断设置了权限的
    if (to.meta.isAuth) {
        if (localStorage.getItem("school") === "成都理工") {
            document.title = to.meta.title || "摩尔庄园"
            next()
        } else {
            alert("学校名不对，无权限查看!")
        }
    } else {
        // 没有设置权限的直接进
        document.title = to.meta.title || "摩尔庄园"
        next()
    }

})

// 全局后置守卫
router.afterEach((to, from) => {
    document.title = to.meta.title || "摩尔庄园"
})

// 暴露
export default router