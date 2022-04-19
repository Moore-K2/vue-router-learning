import axios from "axios"
import { nanoid } from "nanoid"

export default {
    // 开启命名空间
    namespaced: true,
    state: {
        personList: [{ id: "001", name: '张三' },
            { id: "002", name: '李四' },
            { id: "003", name: '王五' },
        ]
    },
    actions: {
        addPersonWang(context, personObj) {
            console.log("addPersonWang触发了")
            if (personObj.name.indexOf('王') == 0) {
                context.commit("ADD_PERSON", personObj)
            } else {
                alert("必须添加姓王的人！")
            }
        },
        // actions连接backend api
        addApi(context) {
            console.log("测试调用server")
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                response => {
                    context.commit("ADD_PERSON", { id: nanoid(), name: response.data })
                },
                error => {
                    alert(error.message)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, personObj) {
            console.log("ADD_PERSON被调用了")
            state.personList.unshift(personObj)
        }
    },
    getters: {
        // 这儿的state是局部personABout的state
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
// export default personAbout