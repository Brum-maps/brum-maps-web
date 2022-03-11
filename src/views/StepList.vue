<template>
  <div class="justify-center pt-10">
    <div>
      <v-btn text-color="green" style="width: 15vw; height: 7vh">
        Ajouter un step
      </v-btn>
    </div>
    <v-card v-for="step in steps" :key="step" class="pt-5">
      <v-card-text>
        {{ step.name }} : {{step.description}} position : {{ step.longitude }} Et {{ step.latitude }}
        <v-btn style="padding-left: 5px" color="red" text>Delete</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "StepList",
  data() {
    return {
      deletionMode: false,
      steps: [
        {name: "Paris", description: "C'est la eiffel tower", longitude: "616", latitude: "145"},
        {name: "Paris", description: "C'est la eiffel tower", longitude: "616", latitude: "145"},
        {name: "Paris", description: "C'est la eiffel tower", longitude: "616", latitude: "145"}
      ]
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>