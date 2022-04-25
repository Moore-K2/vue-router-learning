<template>
  <div class="container">
    <div class="row">
      <Banner></Banner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- active-class="active"点谁谁高亮 -->
          <!-- 实现切换（active-class可配置高亮样式） -->
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
          <!-- 创建todo-list组件 -->
          <router-link
            class="list-group-item"
            active-class="active"
            to="/todolist"
            >TodoList</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定展示位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
  data() {
    return {};
  },
};
</script>

<style>
.container {
  background-color: antiquewhite;
  width: 100%;
  height: 800px;
}
.panel-body {
  /* width: 578px; */
  height: auto;
  margin: 0 auto;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}

/* 设置button样式 */
.btn {
  display: inline-block;
  /* 行内块元素，让元素可以设置成一行（不独占一行），且可以设置宽高 */
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  /* 设置手形光标 */
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
/* 确保点击聚焦的时候，不出现黑色边框 */
.btn:focus {
  outline: none;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
  margin-left: 10px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
</style>