<template>
  <div class="todo-footer">
    <!-- label元素不会向用户呈现任何特殊效果。不过,它为鼠标用户改进了可用性。如果您在label元素内点击文本,就会触发此控件 -->
    <label for="">
      <input type="checkbox" />
    </label>
    <span>{{ doneTodo }}</span
    >/全部{{ allTodo }}
    <button class="btn btn-danger">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  data() {
    return {};
  },
  props: ["todolist"],
  computed: {
    allTodo() {
      return this.todolist.length;
    },
    doneTodo() {
      const arr = this.todolist.filter((todo) => {
        return todo.done;
      });
      return arr.length;
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  padding-left: 6px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>