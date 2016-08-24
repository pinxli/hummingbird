'use strict'
import Vue from 'vue'
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

export default function (router) {
    router.map({
        '/a': {
            component: function (resolve) {
                require(['./views/app.vue'], resolve)
            },
            auth: true,
            subRoutes: {
                '/home': {
                    name: 'home',
                    title: Vue.t('home.title'),
                    component: function (resolve) {
                        require(['./views/home.vue'], resolve)
                    }
                },
                '/deposit': {
                    name: 'deposit',
                    title: Vue.t('deposit.title'),
                    component: function (resolve) {
                        require(['./views/deposit.vue'], resolve)
                    }
                },
                '/withdraw': {
                    name: 'withdraw',
                    title: Vue.t('withdraw.title'),
                    component: function (resolve) {
                        require(['./views/withdraw.vue'], resolve)
                    }
                },
                '/change_password': {
                    name: 'change_password',
                    title: Vue.t('change_password.title'),
                    component: function (resolve) {
                        require(['./views/change_password.vue'], resolve)
                    }
                }
            }
        },
        '/login': {
            name: 'login',
            title: Vue.t('login.title'),
            component: function (resolve) {
                require(['./views/login.vue'], resolve)
            }
        },
        '/register': {
            name: 'register',
            title: Vue.t('register.title'),
            component: function (resolve) {
                require(['./views/register.vue'], resolve)
            }
        }
    })
}
