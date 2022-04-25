<template>
  <div class="todo-header">
    <div class="title">
      <h3>Todo List</h3>
    </div>
    <div class="input">
      <input type="text" @keyup.enter="addTodo" v-model="title" />
    </div>
  </div>
</template>

<script>
// 引入nanoid函数
import { nanoid } from "nanoid";
export default {
  name: "TodoHeader",
  data() {
    return {
      title: "",
    };
  },
  //   接收来自父类todolist的方法add
  props: ["add"],
  methods: {
    addTodo() {
      // 判断输入字符是否为空
      if (!this.title.trim()) return alert("不能输入为空值！");
      const todoObj = {
        id: nanoid(),
        title: this.title,
        done: false,
      };
      this.add(todoObj);
      this.title = "";
    },
  },
};
</script>

<style scoped>
h3 {
  line-height: 15px;
  text-align: center;
  color: red;
}
.todo-header input {
  width: 100%;
  height: 28px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: 0 0 3px rgba(82, 168, 236, 0.8);
}
</style>