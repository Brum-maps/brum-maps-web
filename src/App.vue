<template>
  <HeaderComponent></HeaderComponent>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <FooterComponent></FooterComponent>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderComponent,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
