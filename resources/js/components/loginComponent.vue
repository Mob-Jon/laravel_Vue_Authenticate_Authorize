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
    ...mapGetters([
      "authenticated"
    ])
  },
  // created(){
  //   if (this.authenticated) {
  //     this.$router.push({ name: "requests" });
  //   }
  // },
  methods: {
    async login() {
      this.error = null;
      try {
        await this.$store.dispatch("login", this.data);
        await this.$router.push({ path: "requests" });
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>