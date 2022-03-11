<template>
  <v-footer style="background-color: #AE9387" padless>
    <v-row no-gutters="true" align="center" justify="center">
      <v-col>
        <v-img
            max-height="100"
            max-width="100"
            src="../assets/Brum-maps-logo-removebg-cropped.png"
            class="ml-10"
        ></v-img>
      </v-col>
      <v-col v-for="link in links" :key="link">
        <router-link :to="link.link" style="text-decoration: none; color: inherit;">
          <v-btn elevation="0" color="#AE9387" plain text class="px-16" text-color="white">
            {{ link.name }}
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "HeaderComponent",
  data: () => ({
    links: [
      {name: 'DashBoard', link: '/'},
      {name: 'Visites', link: '/visits'},
      {name: 'Step', link: '/steps'},
      {name: 'Login', link: '/login'},
    ]
  }),
}
</script>

<style scoped>
</style>