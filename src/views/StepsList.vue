<template>
  <v-container>
    <v-row>
      <v-col v-for="(step, index) in steps" :key="step"  cols="12" sm="4">
        <v-card style="min-height: 100%; position:relative;">
          <v-img class="white--text clickable" lazy-src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" :src=step.image style="filter: blur(5px); -webkit-filter: blur(5px);">
          </v-img>
          <v-card-text class="text-white align-center justify-center clickable" style="position:absolute; top: 30%; width: 100%; font-weight: bold;">
            <div class="text-sm-button">{{step.name}}</div>
            <div class="text-sm-caption">{{ step.description }}</div>
          </v-card-text>
          <v-card-actions class="justify-center text-center pt-4" style="width: 100%">
            <v-btn color="red" text v-on:click="deleteStep(step, index)">Supprimer</v-btn>
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
    },
    deleteStep(step, index) {
      this.axios.delete("http://10.33.3.195:3000/bru-maps/step/" + step.id + "/delete")
      delete this.steps[index]
    }
  },
  beforeMount() {
    this.getList()
  }
}
</script>

<style scoped>

</style>