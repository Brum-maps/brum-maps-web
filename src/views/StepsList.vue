<template>
  <v-container>
    <v-row>
      <v-col v-for="step in steps" :key="step"  cols="12" sm="4">
        <v-card style="min-height: 100%; position:relative;">
          <v-img class="white--text clickable" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" style="filter: blur(10px); -webkit-filter: blur(10px);"  v-on:click="onCardClick(step)">
          </v-img>
          <v-card-text v-if="step.active" class="text-green clickable" style="position:absolute; top: 0; left: 0; font-weight: bold;"  v-on:click="onCardClick(step)">
            <v-icon>mdi-check-decagram</v-icon>
            <div>Actif</div>
          </v-card-text>
          <v-card-text v-if="this.deletionMode" class="text-red clickable" style="position:absolute; top: 0; right: 0; font-weight: bold;"  v-on:click="deleteCard(step)">
            <v-icon>mdi-delete-forever</v-icon>
          </v-card-text>
          <v-card-text class="text-white align-center justify-center clickable" style="position:absolute; top: 30%; width: 100%; font-weight: bold;"  v-on:click="onCardClick(step)">
            <div class="text-sm-button">{{step.title}}</div>
            <div class="text-sm-caption">{{ step.placesNumber }} lieux <br>{{ step.description }}</div>
          </v-card-text>
          <v-card-actions class="justify-center text-center pt-4" style="width: 100%">
            <v-btn v-if="!step.active" color="orange" text v-on:click="courseOn(step)">Activer</v-btn>
            <v-btn v-else color="orange" text v-on:click="courseOff(step)">Désactiver</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "StepsList",
  data() {
    return {
      deletionMode : false,
      steps: [
        {title: "Visite 1", description: "Une visite de la tour eiffel", placesNumber:15, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
        {title: "Visite 2", description: "Une visite du park de la courneuve", placesNumber:8, active: false},
      ]
    }
  },
  methods: {
    getList() {
      this.axios.get("http://10.33.3.195:3000/bru-maps/step/getAll").then((response) => {
        console.log(response.data)
      })
      // or
      this.$http.get(api).then((response) => {
        console.log(response.data)
      })
    }
  }
}
</script>

<style scoped>

</style>