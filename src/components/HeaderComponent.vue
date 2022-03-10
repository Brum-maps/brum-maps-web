<template>
  <v-footer style="background-color: #AE9387" padless>
    <v-row justify="center" no-gutters="true">
      <router-link v-for="link in links" :to="link.link" :key="link" style="text-decoration: none; color: inherit;">
        <v-btn elevation="0" color="#AE9387" plain text class="py-2 px-16" text-color="white">
          {{ link.name }}
        </v-btn>
      </router-link>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({
    links: [
      {name: 'Home', link: '/visites'},
      {name: 'About Us', link: '/'},
      {name: 'Team', link: '/'},
      {name: 'Services', link: '/'},
      {name: 'Blog', link: '/'},
      {name: 'Contact Us', link: '/'},
    ],
  }),
}
</script>

<style scoped>
</style>