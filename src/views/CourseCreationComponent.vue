<template>
  <form class="px-3">
    <input label="title" v-model="message"/>
  </form>
</template>

<script>
export default {
  name: "CourseCreationComponent",
  data() {
    return {
      message: "ok",
    }
  }
}
</script>

<style scoped>

</style>