<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :add="add"></TodoHeader>
      <TodoArr :todolist="todolist"></TodoArr>
      <TodoFooter :todolist="todolist"></TodoFooter>
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
      todolist: JSON.parse(localStorage.getItem("todolist")) || [],
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
    check(id) {
      // 遍历todolist的todo,若id===todo的id, 将done = !done
      this.todolist.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
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
    // 绑定全局总线事件 for item
    this.$bus.$on("deleteTodo", this.delete);
    // 绑定全局总线事件-for item
    this.$bus.$on("checkTodo", this.check);
  },
  watch: {
    todolist: {
      deep: true,
      // value其实是todo对象
      handler(value) {
        // console.log("监视到了", value);
        localStorage.setItem("todolist", JSON.stringify(value));
      },
    },
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