<template>
  <HeaderSection></HeaderSection>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <footer-section></footer-section>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HeaderSection from "@/components/HeaderSection";
import FooterSection from "@/components/FooterSection";

export default {
  name: 'App',
  components: {
    FooterSection,
    HeaderSection,
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
  margin-top: 60px;
}
</style>
