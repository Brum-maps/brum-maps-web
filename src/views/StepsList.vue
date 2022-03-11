<template>
  <v-container>
    <v-row>
      <v-col v-for="step in steps" :key="step"  cols="12" sm="4">
        <v-card style="min-height: 100%; position:relative;">
          <v-img class="white--text clickable"  lazy-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" src="{{step.image}}" style="filter: blur(10px); -webkit-filter: blur(10px);"  v-on:click="onCardClick(step)">
          </v-img>
          <v-card-text class="text-white align-center justify-center clickable" style="position:absolute; top: 30%; width: 100%; font-weight: bold;"  v-on:click="onCardClick(step)">
            <div class="text-sm-button">{{step.name}}</div>
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
      steps : "{}",
    }
  },
  methods: {
    getList() {
      this.axios.get("http://10.33.3.195:3000/bru-maps/step/getAll").then((response) => {
        console.log(response.data)
        this.steps = response.data
      })
    }
  },
  beforeMount() {
    this.getList()
  }
}
</script>

<style scoped>

</style>