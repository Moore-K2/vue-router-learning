<template>
  <div>
    <ul class="todoArr">
      <!-- 给子组件Todoitem传todoObj对象 -->
      <TodoItem v-for="todo in todolist" :key="todo.id" :todo="todo"></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoArr",
  components: {
    TodoItem,
  },
  props: ["todolist"],
};
</script>

<style scoped>
ul {
  margin-top: 5px;
  padding: 0px;
}
</style>