<template>
  <div>
    <div class="input">
      <input
        type="text"
        v-model="title"
        @keyup.enter="add"
        HEAD
        placeholder="添加新语录"
      />&nbsp;
      <button @click="add">添加语录</button>
      <button @click="add">添加社会语录</button>
    </div>
    <ul>
      <li v-for="m in messageArr" :key="m.id">
        <!-- 字符串写法 加：表示将引号里面的解析为Js,再加模板字符串，目的是混着js变量 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link> -->
        <!-- 推荐写法，对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
              content: m.content,
            },
          }"
          >{{ m.title }}</router-link
        >
      </li>
    </ul>
    <hr />
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
      messageArr: [
        { id: "1", title: "希望", content: "我希望你为我而来" },
        { id: "2", title: "心安", content: "最长久的心安莫过于和你共悲喜" },
        { id: "3", title: "共苦", content: "酸涩皱眉与你共苦不算太差" },
        { id: "4", title: "跌倒", content: "天在下雨地下滑，自己跌倒自己爬" },
      ],

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
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          console.log("添加成功");
        },
        (error) => {
          alert(error.message);
        }
      );
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
      if (this.title.trim()) {
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
      } else {
        alert("输入的标题不能为空！");
      }
    },
  },
  watch: {
    messageArr: {
      deep: true,
      handler(value) {
        // value其实是messageArr数组的所有对象
        console.log(value);
        localStorage.setItem("messageArr", JSON.stringify(value));
      },
    },
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
</style>