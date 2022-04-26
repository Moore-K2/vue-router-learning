<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :add="add"></TodoHeader>
      <TodoArr :todolist="todolist"></TodoArr>
      <TodoFooter></TodoFooter>
    </div>
  </div>
</template>

<script>
// 引入组件
import TodoHeader from "../components/TodoHeader.vue";
import TodoArr from "../components/TodoArr.vue";
import TodoFooter from "../components/TodoFooter.vue";
export default {
  name: "TodoList",
  data() {
    return {
      todolist: [
        { id: "001", title: "学习", done: false },
        { id: "002", title: "打豆豆", done: false },
        { id: "003", title: "打游戏", done: false },
      ],
    };
  },
  //方法
  methods: {
    add(todo) {
      this.todolist.unshift(todo);
    },
    delete(id) {
      this.todolist = this.todolist.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
  //注册组件
  components: {
    TodoHeader,
    TodoArr,
    TodoFooter,
  },
  mounted() {
    this.$bus.$on("deleteTodo", this.delete);
  },
};
</script>

<style scoped>
/* .todo-container {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
} */
/* 设置todo-list的框 */
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.title {
  color: red;
  font-size: 20px;
  text-align: center;
  height: 15px;
  line-height: 15px;
}
</style>