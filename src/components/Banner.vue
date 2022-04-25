<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <h2>Vue Router Demo</h2>
    </div>
  </div>
</template>
 
<script>
export defau {
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
};
</script>

<style>
.page-header h2 {
  text-align: center;
}
button {
  margin: 5px;
}
</style>