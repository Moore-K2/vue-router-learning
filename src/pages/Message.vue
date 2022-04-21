<template>
  <div>
    <div class="input">
      <input
        type="text"
        v-model="title"
        @keyup.enter="add"
        HEAD
        placeholder="添加新语录..."
      />&nbsp;
      <button @click="add">添加语录</button>
    </div>
    <ul>
      <transition-group name="todo">
        <li v-for="m in messageArr" :key="m.id">
          <!-- 字符串写法 加：表示将引号里面的解析为Js,再加模板字符串，目的是混着js变量 -->
          <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link> -->
          <!-- 推荐写法，对象query写法 -->
          <!-- <router-link
            :to="{
              name: 'xiang',
              query: {
                id: m.id,
                title: m.title,
                content: m.content,
              },
            }"
            >{{ m.title }}</router-link
          > -->
          <!-- 推荐写法，对象params写法,需要在index.js路由中给path配置参数 -->
          <!-- <router-link
            :to="`/home/message/detail/${m.id}/${m.title}/${m.content}`"
            >{{ m.title }}</router-link
          > -->
          <router-link
            :to="{
              name: 'xiangqing',
              params: {
                id: m.id,
                title: m.title,
                content: m.content,
              },
            }"
            >{{ m.title }}</router-link
          >
          <!-- 获取id进行筛选 -->
          <button @click="del(m.id)">删除</button>
          <button class="btn1">replace查看</button>
          <button class="btn1" @click="pushShow">push查看</button>
        </li>
      </transition-group>
    </ul>
    <hr />
    <!-- 展示区 -->
    <div class="display">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// 函数要用大括号包含
import { nanoid } from "nanoid";
export default {
  name: "Message",

  data() {
    return {
      title: "",
      messageArr: JSON.parse(localStorage.getItem("messageArr")) || [],
      //#region
      // messageArr: [
      //   { id: "1", title: "花香", content: "花以香为证，人以富为首" },
      //   {
      //     id: "2",
      //     title: "繁华",
      //     content: "愿此去繁花似锦，再相逢依然如故。",
      //   },
      //   {
      //     id: "3",
      //     title: "王八",
      //     content:
      //       "王八摸头必有所求，大哥摸头必有所愁，大哥你潇洒人世走，王八它快乐水中游。",
      //   },
      //   {
      //     id: "4",
      //     title: "微笑",
      //     content: "对你微笑，纯属礼貌，给脸不要，我看你无可救药。",
      //   },
      // ],
      //#endregion    };
    };
  },
  methods: {
    add() {
      //#region
      //   const obj = {
      //     id: nanoid(),
      //     title: this.title,
      //     content: response.data,
      //   };
      //   this.messageArr.unshift(obj);
      //   this.name = "";
      // const obj = { id: nanoid(), title: this.title, content: "" };
      // this.messageArr.unshift(obj);
      // this.title = "";
      //#endregion
      if (!this.title.trim()) return alert("输入的标题不能为空！");
      // if (
      //   this.messageArr.forEach((m) => {
      //     if (m.title === this.title) return alert("输入不能重复");
      //   })
      // 定义flag，判断当前数组的标题是否有重复的，确保不重复。不能定义为const（read-only)
      let flag = true;
      this.messageArr.forEach((m) => {
        if (m.title == this.title) {
          flag = false;
          alert("不能输入相同的语录标题！");
        }
      });
      if (flag) {
        axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
          (response) => {
            console.log(response.data);
            const obj = {
              id: nanoid(),
              title: this.title,
              content: response.data,
            };
            this.messageArr.unshift(obj);
            this.title = "";
          },
          (error) => {
            alert(error.message);
          }
        );
      }
    },
    del(id) {
      console.log(id);
      if (confirm("Are you sure to delete?")) {
        this.messageArr = this.messageArr.filter((m) => {
          return m.id !== id;
        });
      }
    },
    // 设置编程式路由
    pushShow() {
      console.log(this.$router);
    },
  },
  watch: {
    messageArr: {
      deep: true,
      handler(value) {
        // value其实是messageArr数组的所有对象
        // console.log(value);
        localStorage.setItem("messageArr", JSON.stringify(value));
      },
    },
  },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
/*设置点击前的样式 */

a:hover {
  color: red;
}
/*设置点击后的样式 */
.router-link-active {
  text-decoration: none;
}
.input {
  margin: 10px;
}
li:hover {
  background-color: #d4e5ee;
}
li {
  /* list-style: none; */
  padding: 0 5px;
  height: 25px;
  line-height: 25px;
  border-bottom: 1px solid #ddd;
  /* border: 1px solid rgba(0, 0, 0, 0.1); */
}
li:hover button {
  color: red;
  display: block;
}
.btn1 {
  width: 80px;
}
li button {
  font-size: 10px;
  line-height: 20px;
  width: 55px;
  height: 22px;
  float: right;
  margin-top: 2px;
  margin-left: 15px;
  display: none;
}
/* 配置input聚焦 */
.input input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
/* 配置动画 */
.todo-enter-active {
  animation: Moore, 1s linear;
}
@keyframes Moore {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>