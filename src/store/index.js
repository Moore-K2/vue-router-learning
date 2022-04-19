// 引入Vue核心库
import Vue from "vue"
// 引入vuex
import Vuex from "vuex"
// 应用Vuex
Vue.use(Vuex)

//求和相关的配置
import countAbout from "./count.js"
// 人员信息的配置
import personAbout from "./person.js"

export default new Vuex.Store({
    modules: {
        countAbout: countAbout,
        personAbout: personAbout
    }

})

// 创建store
// const store = new Vuex.Store({ actions,
// mutations,
// state
// })
// 暴露store
// export default store