<template>
  <v-container>
    <v-layout class="justify-center">
        <!-- login view -->
        <v-card style="width: 500px">
          <v-toolbar>
            <v-toolbar-title>Connexion</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <!-- login form -->
            <v-form>
              <v-text-field
                  v-model='username'
                  id='username'
                  :rules="usernameRules"
                  name='username'
                  label='Usename'
                  type='text'
                  required>
              </v-text-field>
              <v-text-field
                  v-model='password'
                  id='password'
                  :rules="passwordRules"
                  label='Password'
                  type='password'
                  required>
              </v-text-field>
              <v-spacer></v-spacer>
              <v-card-actions class="justify-center">
                <v-btn :click='connect()'>Login</v-btn>
              </v-card-actions>
            </v-form>
            <!-- login form -->
          </v-card-text>
        </v-card>
        <!-- end login view -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "ConnexionComponent",
  data() {
    return {
      username: "",
      password: "",
      usernameRules: [v => !!v || 'Le username est obligatoire', v => v.length <= 10 || 'Le nom doit faire moins de 10 characters',],
      passwordRules: [v => !!v || 'Le mot de passe est obligatoire'],
    }
  },
  methods: {
    connect: function () {
      //TODO: Call API to login
      let user = "123456";
      localStorage.setItem("userId", user);
    }
  }


}
</script>

<style scoped>
  .v-toolbar{
    text-align: center;
    background-color: #AE9387;
  }
</style>