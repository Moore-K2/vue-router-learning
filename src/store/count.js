const countAbout = {
    // 开启命名空间
    namespaced: true,
    //保存具体的数据
    state: {
        sum: 0,
        school: "CDUT",
        name: "Moore",
    },
    //创建动作对象，相应组件中用户的动作
    actions: {
        jiaodd(context, value) {
            if (context.state.sum % 2) { context.commit("JIA", value) }
        },
        jiawait(context, value) {
            console.log("等一等再加触发,context是mini store")
            setTimeout(() => {
                context.commit("JIA", value);
            }, 500);
        }
    },
    //创建mutations对象，修改state中的数据、与devtools进行连接
    mutations: {
        JIA(state, value) {
            console.log("mutations中的JIA被调用了", value)
            state.sum += value
        },
        JIAN(state, value) {
            state.sum -= value
        },
    },
    // 当state中的数据需要经过加工后再使用时，可以使用getters加工。
    getters: {
        // 这儿的state是局部的state
        bigSum(state) {
            return state.sum * 10
        }
    }

}

export default countAbout