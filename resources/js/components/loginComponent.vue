<template>
  <v-row align-content="center">
    <v-col>
      <v-card class="mx-auto p-3" max-width="500">
        <v-card-text class="text-center">
          <h2>Login</h2>
        </v-card-text>
        <v-form class="m-5">
          <v-text-field
            placeholder="email"
            append-icon="mdi-envelope"
            v-model="data.email"
            outlined
            color
          ></v-text-field>
          <v-text-field
            placeholder="password"
            v-model="data.password"
            outlined
            color
          ></v-text-field>
          <div>
            <p>Forgot password? Click here</p>
          </div>
        </v-form>
        <v-card-actions>
          <v-btn block color="primary" @click="login">Login </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "LoginComponent",
  data() {
    return {
      data: {}
    };
  },
  computed: {
    ...mapGetters(["authenticated"])
  },
  methods: {
    login() {
      this.error = null;

      this.$store
        .dispatch("login", this.data)
        .then(result => {
          console.log(result);
          let role = this.$store.getters.user_role;
          if (role == 'admin') {
            this.$router.push({ path: "/admin/requests" });
          }
          else if (role == 'tester') {
              this.$router.push({ path: "/tester/requests" });
          }
          else if (role == 'requestor') {
              this.$router.push({ path: "/requestor/requests" });
          }
          else{
            this.$router.push({ path: "/" });
          }
        })
        .catch(error => {
          console.log(error);
        });

    }
  }
};
</script>