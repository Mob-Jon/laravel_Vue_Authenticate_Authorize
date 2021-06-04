import Vue from 'vue'
import Vuex from 'vuex'
import repository from "../api/repository";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: {
            state: {
                user: sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null,
                token: sessionStorage.token ? sessionStorage.getItem('token') : null,
                user_role: sessionStorage.user_role ? sessionStorage.getItem('user_role') : null,

            },

            getters: {
                user: state => state.user,
                authenticated: state => state.token !== null,
                token: state => state.token,
                user_role: state => state.user_role
            },

            mutations: {
                SET_USER(state, user) {
                    state.user = user;
                },
                SET_TOKEN(state, token) {
                    state.token = token;
                },
                SET_USER_ROLE(state, user_role) {
                    state.user_role = user_role;
                }
            },

            actions: {
                login({
                    commit
                }, user) {
                    return new Promise((resolve, reject) => {
                        repository.createSession();
                        repository.login(user).then(result => {
                            commit('SET_USER', result.data)
                            commit('SET_TOKEN', result.data.token)
                            commit('SET_USER_ROLE', result.data.user.user_role);
                            sessionStorage.user = JSON.stringify(result.data);
                            sessionStorage.token = result.data.token;
                            sessionStorage.user_role = result.data.user.user_role;
                            resolve(result);
                        }).catch(err => {
                            console.log(err);
                            reject(err);
                        })
                    })

                },

                async logout({
                    commit
                }) {
                    await repository.logout().then(res => {
                        console.log(res);
                        commit('SET_USER', null);
                        commit('SET_TOKEN', null);
                        commit('SET_USER_ROLE', null)
                        sessionStorage.removeItem('token');
                        sessionStorage.removeItem('user');
                        sessionStorage.removeItem('user_role');
                    }).catch(err => {
                        console.log(err);
                    })
                }
            }
        }
    }
});
