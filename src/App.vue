<template>
  <HeaderComponent></HeaderComponent>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <footer-section></footer-section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FooterSection from "@/components/FooterSection";
import HeaderComponent from "@/components/HeaderComponent";

export default {
  name: 'App',
  components: {
    FooterSection,
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
