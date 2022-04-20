<template>
  <div>
    <ul>
      <li v-for="m in messageArr" :key="m.id">
        <!-- 字符串写法 加：表示将引号里面的解析为Js,再加模板字符串，目的是混着js变量 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{
          m.title
        }}</router-link> -->
        <!-- 推荐写法，对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >
      </li>
    </ul>
    <hr />
    <div class="display">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageArr: [
        { id: "1", title: "message1" },
        { id: "2", title: "message2" },
        { id: "3", title: "message3" },
        { id: "4", title: "message4" },
      ],
    };
  },
};
</script>

<style>
hr {
  color: red;
}
</style>