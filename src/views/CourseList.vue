<template>
  <div class="mr-5 mt-7 ml-7 float-left">
    <v-row>
      <router-link :to="`/course-creation`" style="text-decoration: none; color: inherit;">
        <v-btn text-color="green" style="width: 15vw; height: 7vh">
          Ajouter un parcours
        </v-btn>
      </router-link>
    </v-row>
    <v-row class="mt-5">
      <v-btn text-color="red" style="width: 15vw; height: 7vh" v-on:click="toggleDeletionMode">
        Supprimer un parcours
      </v-btn>
    </v-row>

  </div>
  <v-container>
    <v-row>
      <v-col v-for="course in courseList" :key="course"  cols="12" sm="4">
        <v-card style="min-height: 100%; position:relative;">
          <v-img class="white--text clickable" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" style="filter: blur(10px); -webkit-filter: blur(10px);"  v-on:click="onCardClick(course)">
          </v-img>
          <v-card-text v-if="course.active" class="text-green clickable" style="position:absolute; top: 0; left: 0; font-weight: bold;"  v-on:click="onCardClick(course)">
            <v-icon>mdi-check-decagram</v-icon>
            <div>Actif</div>
          </v-card-text>
          <v-card-text v-if="this.deletionMode" class="text-red clickable" style="position:absolute; top: 0; right: 0; font-weight: bold;"  v-on:click="deleteCard(course)">
            <v-icon>mdi-delete-forever</v-icon>
          </v-card-text>
          <v-card-text class="text-white align-center justify-center clickable" style="position:absolute; top: 30%; width: 100%; font-weight: bold;"  v-on:click="onCardClick(course)">
            <div class="text-sm-button">{{course.title}}</div>
            <div class="text-sm-caption">{{ course.placesNumber }} lieux <br>{{ course.description }}</div>
          </v-card-text>
          <v-card-actions class="justify-center text-center pt-4" style="width: 100%">
            <v-btn v-if="!course.active" color="orange" text v-on:click="courseOn(course)">Activer</v-btn>
            <v-btn v-else color="orange" text v-on:click="courseOff(course)">Désactiver</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: "CourseList",
  data() {
    return {
      deletionMode : false,
      courseList: [
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
    toggleDeletionMode() {
      this.deletionMode = !this.deletionMode;
    },
    deleteCard(course) {
      console.log(course)
    },
    onCardClick(course) {
      if (!this.deletionMode) {
        console.log(course)
      }
    },
    fetchAllCourse: {
      // TODO: Call API to get all course
    },
    courseOn(course) {
      course.active = true
      console.log(course) // TODO: Action on activation
    },
    courseOff(course) {
      course.active = false
      console.log(course) // TODO: Action on disabling
    }
  },
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
}
</style>