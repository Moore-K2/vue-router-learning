<template>
  <div class="myItem">
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @click="check(todo.id)"
        />&nbsp;
        <span>{{ todo.title }}</span>
      </label>
      <button @click="del(todo.id)">删除</button>
      <button @click="del(todo.id)">编辑</button>
      <!-- <el-button type="primary">编辑</el-button> -->
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    // 触发爷爷组件的事件
    del(id) {
      if (confirm("您确定删除吗？")) {
        this.$bus.$emit("deleteTodo", id);
      }
    },
    // 触发爷爷组件的事件
    check(id) {
      this.$bus.$emit("checkTodo", id);
    },
  },
};
</script>

<style scoped>
li:hover {
  background-color: #d4e5ee;
}
li {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  list-style: none;
  height: 26px;
  line-height: 26px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

li label {
  /* float: left; */
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  /* margin-top: 3px; */
  margin: 5px;
  width: 47px;
  height: 16px;
  line-height: 12px;
  font-size: 5px;
  border-radius: 10px;
  border: none;
}

/* 鼠标指向父元素li上显示button */
li:hover button {
  display: block;
  color: red;
  background-color: antiquewhite;
}
li button:hover {
  color: blue;
}
/* ?? */
li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>