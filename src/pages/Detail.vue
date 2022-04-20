<template>
  <ul>
    <li>消息编号：{{ $route.query.id }}</li>
    <li>消息标题：{{ $route.query.title }}</li>
    <li>消息内容：{{ $route.query.content }}</li>
  </ul>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style>
</style>