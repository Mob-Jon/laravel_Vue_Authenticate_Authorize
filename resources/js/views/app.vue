<template>
  <v-app>
    <router-view />
  </v-app>
</template>
<script>
const default_layout = "default";

// import LoginComponent from "../components/loginComponent";

export default {
  components: {
    // LoginComponent
  },
  computed: {},
  data() {
    return {
      message: "Hello World"
    };
  }
};
</script>