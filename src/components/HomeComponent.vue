<template>
    <v-img src="../assets/Brum-maps-logo.png" alt="logo"></v-img>
    <v-container>
      <v-row>
        <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <v-card style="min-height: 100%">
            <v-card-text class="text-white align-center justify-center clickable">
              <div v-if="n === 0" style="color: red" class="text-sm-button">Nombre d'itinéraires</div>
              <div v-if="n === 0" class="text-sm-caption">{{ datas.iteneraryCount }}</div>
              <div v-if="n === 1" class="text-sm-button">Nombre d'étapes</div>
              <div v-if="n === 1" class="text-sm-caption">{{ datas.stepCount }}</div>
              <div v-if="n === 2" class="text-sm-button">User</div>
              <div v-if="n === 2" class="text-sm-caption">{{ user }}</div>
            </v-card-text>
            <!--<v-card-actions class="justify-center text-center pt-4" style="width: 100%">
              <v-btn v-if="!d.isActive" color="orange" text v-on:click="courseOn(d)">Activer</v-btn>
              <v-btn v-else color="orange" text v-on:click="courseOff(d)">Désactiver</v-btn>
            </v-card-actions>-->
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: "HomeComponent",
  userId : null,
  data() {
    return {
      datas : {
        iteneraryCount: 0,
        stepCount: 0
      },
      user: null
    }
  },
  beforeMount() {
    this.axios.get("http://10.33.3.195:3000/bru-maps/step/getAll").then((response) => {
      console.log(response.data)
      this.datas.iteneraryCount = response.data.count
    })

    this.axios.get("http://10.33.3.195:3000/bru-maps/itinerary/getall").then((response) => {
      console.log(response.data)
      this.datas.stepCount = response.data.count
    })

    this.user = localStorage.getItem("userId")
  }
}
</script>

<style scoped>
.v-img {
  width: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>