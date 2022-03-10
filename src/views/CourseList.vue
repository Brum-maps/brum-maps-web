<template>
    <v-container>
      <v-row>
        <v-col v-for="course in courseList" :key="course"  cols="12" sm="4">
          <v-card class="mx-auto" max-width="400"
                  style="background-color: #AE9387;min-height: 100%;">
            <v-img class="white--text align-end" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
              <v-card-title>{{ course.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">{{ course.nbLieux }}</v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ course.descritpion }}</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text v-on:click="courseOn()">Activer</v-btn>
              <v-btn color="orange" text v-on:click="courseOff()">Désactiver</v-btn>
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
      courseList: [
        {title: "Visite 1", descritpion: "Une visite de la tour eiffel", nbLieux:15},
        {title: "Visite 2", descritpion: "Une visite du park de la courneuve", nbLieux:8}
      ]
    }
  },
  methods: {
    fetchAllCourse: {
      // TODO: Call API to get all course
    },
    courseOn:{

    },
    courseOff:{

    }
  }
}
</script>

<style scoped>

</style>