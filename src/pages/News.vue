<template>
  <div>
    <ul>
      <li :style="{ opacity }">wlecome to cdut</li>
      <li>
        news001
        <input type="text" />
      </li>
      <li>
        news002
        <input type="text" />
      </li>
      <li>
        news003
        <input type="text" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy() {
  //   console.log("News即将被销毁了！");
  //   // 在组件即将被销毁的时候，清空定时器
  //   clearInterval(this.timer);
  // },
  // mounted() {
  //   setInterval(() => {
  //     // this.timer留下这个定时器的id
  //     this.timer = this.opacity -= 0.01;
  //     if (this.opacity <= 0) {
  //       this.opacity = 1;
  //     }
  //   }, 16);
  // },
  activated() {
    console.log("news激活了");
    setInterval(() => {
      // this.timer留下这个定时器的id
      this.timer = this.opacity -= 0.01;
      if (this.opacity <= 0) {
        this.opacity = 1;
      }
    }, 160);
  },
  deactivated() {
    console.log("news失活了");
    console.log("News即将被销毁了！");
    // 在组件即将被销毁的时候，清空定时器
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>