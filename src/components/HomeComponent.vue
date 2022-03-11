<template>
  <div>
    <v-img src="../assets/Brum-maps-logo.png" alt="logo"></v-img>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  beforeMount() {
    localStorage.getItem("userId");
  }
}
</script>

<style scoped>
.v-img {
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>