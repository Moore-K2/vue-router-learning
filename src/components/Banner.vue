<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <h2>{{ information }}</h2>
      <button @click="toggle" class="tog">切换</button>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
export default {
  name: "Banner",
  data() {
    return {
      information: "我希望你为我而来",
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    toggle() {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          // console.log(response.data);
          this.information = response.data;
        },
        (error) => {
          alert(error.message);
        }
      );
    },
  },
};
</script>

<style>
.tog {
  display: block;
  margin-left: 77%;
}
.page-header h2 {
  text-align: center;
}
button {
  margin: 5px;
}
</style>