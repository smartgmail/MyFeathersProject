<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-form
          v-if="!loading"
          v-model="valid"
          @submit.prevent="login({ valid, user })"
          @keydown.prevent.enter
        >
          <v-text-field v-model="user.username" :rules="notEmptyRules" label="Username" required></v-text-field>
          <v-text-field
            v-model="user.password"
            :rules="notEmptyRules"
            label="Password"
            type="password"
            required
          ></v-text-field>
          <v-btn type="submit" :disabled="!valid">Login</v-btn>
        </v-form>
        <v-progress-circular v-if="loading" :size="70" :width="7" indeterminate color="primary"></v-progress-circular>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { notEmptyRules } from "validators";

export default {
  name: "login",
  data: () => ({
    valid: false,
    user: {
      username: "",
      password: ""
    },
    notEmptyRules
  }),
  computed: {
    ...mapState("auth", { loading: "isAuthenticatePending" })
  },
  methods: {
      ...mapActions('auth',['authenticate']),
    login() {
        console.log("========113===== name"+this.user.username+"======"+this.user.password);
      this.authenticate({
        strategy: "local",
        username: this.user.username,
        password: this.user.password
      })
        .then(() => {
          // Logged in
  
          this.$router.push("/boards")
          console.log("========112===== login ok");
        })
        .catch(e => {
            
          // Show login page (potentially with `e.message`)
          console.error("Authentication error", e);
        });
    }
    //...mapActions('localAuth', ['login']),
  }
};
</script>