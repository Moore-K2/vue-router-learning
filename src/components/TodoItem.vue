<template>
  <div class="myItem">
    <li>
      <label>
        <input type="checkbox" />&nbsp;
        <span>{{ todo.title }}</span>
      </label>
    </li>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
};
</script>

<style scoped>
li:hover {
  background-color: #d4e5ee;
}
li {
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
  margin-top: 3px;
}
/* 鼠标指向父元素li上显示button */
li:hover button {
  display: block;
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