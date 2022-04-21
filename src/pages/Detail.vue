<template>
  <ul>
    <!-- query接收 -->
    <!-- <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
    <li>消息内容：{{ $route.query.content }}</li> -->
    <!-- params接收 -->
    <!-- <li>消息编号：{{ $route.params.id }}</li>
    <li>消息标题：{{ $route.params.title }}</li>
    <li>消息内容：{{ $route.params.content }}</li> -->
    <li>消息编号：{{ id }}</li>
    <li>消息标题：{{ title }}</li>
    <li>消息内容：{{ content }}</li>
  </ul>
</template>
<script>
export default {
  name: "Detail",
  // 接收来自index对detail路由的props配置
  props: ["id", "title", "content"],
};
</script>

<style>
</style>