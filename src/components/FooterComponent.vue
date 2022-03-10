<template>
  <v-footer bottom absolute style="width: 100%;" padless>
    <v-row justify="center" class="my-3">
      <router-link v-for="link in links" :to="link.link" :key="link" style="text-decoration: none; color: inherit;">
        <v-btn elevation="0" color="white" plain text class="px-8 text-footer" text-color="black">
          {{ link.name }}
        </v-btn>
      </router-link>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data: () => ({
    links: [
      {name: 'Home', link: '/visits'},
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
  .text-footer {
    font-size: .4em;
  }
</style>