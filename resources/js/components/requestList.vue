<template>
  <v-col>
    <div v-if="requests" class="posts-wrapper">
      <div v-for="(request, index) in requests" :key="index">
        <h3>{{ request.title }}</h3>
        <p>{{ request.text }}</p>
      </div>
    </div>
    <v-btn small elevation="" color="" @click="logout" v-if="authenticated"
      >logout</v-btn
    >
  </v-col>
</template>
<script>
import { mapGetters } from "vuex";
import repository from "../api/repository";
export default {
  data() {
    return {
      requests: {}
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "authenticated"
    })
  },
  // created(){
  //   if(this.authenticated){
  //     this.$router.push({ name: "requests" });
  //   }
  // },
  async mounted() {
    try {
      let { data } = await repository.getRequests();
      this.requests = data;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("logout");
        await this.$router.push({ name: "login" });
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>