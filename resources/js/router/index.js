
import Vue from 'vue'
import routes from "./routes";
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  fallback: false,
  scrollBehavior: () => ({ y: 0 }),
  routes,
  base: process.env.BASE_URL,
});

export default router;