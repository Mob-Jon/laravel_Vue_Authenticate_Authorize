import Vue from 'vue'
import routes from "./routes";
import Router from 'vue-router'
import store from '../store';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    fallback: false,
    scrollBehavior: () => ({
        y: 0
    }),
    routes,
    base: process.env.BASE_URL,
});



router.beforeEach((to, from, next) => {
    // if (store.getters['authenticated']) {
    //     next({ path: '/requests' });
    // } else {
    //     next();
    // }
    let role = store.getters['user_role'];
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (store.getters['authenticated']) {
            if (role == 'admin') {
                if (to.meta.isAdmin) {
                    if (role == 'admin') {
                        next();
                    } else {
                        next({
                            path: '/page-not-found'
                        })
                    }
                }
            } else if (to.meta.isTester) {
                if (role == 'tester') {
                    next();
                } else {
                    next({
                        path: '/page-not-found'
                    })
                }

            } else if (to.meta.isPo) {
                if (role == 'requestor') {
                    next();
                } else {
                    next({
                        path: '/page-not-found'
                    })

                }
            } else {
                next({
                    path: '/'
                })
            }
        } else {
            next({
                path: '/'
            });
        }
    } else {
        next();
    }
})

export default router;
