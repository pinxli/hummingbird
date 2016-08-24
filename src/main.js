import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from './routers'
import VueResource from 'vue-resource'
import VueI18n from 'vue-i18n'
import locales from './i18n/locales'
import VueCookie from 'vue-cookie'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(VueCookie)

Vue.config.lang = 'en'

Object.keys(locales).forEach(lang => {
    Vue.locale(lang, locales[lang])
})

let router = new VueRouter()
let token = VueCookie.get('access_token')

router.beforeEach((transition) => {
    if (transition.to.auth) {
        if (token) {
            transition.next()
        } else {
            transition.redirect('/login?next=' + transition.to.path)
        }
    } else {
        transition.next()
    }
})
router.afterEach(function (transition) {
    let targetRouter = transition.to
    document.title = targetRouter.title + ' - ' + Vue.t('app_name')
})

let app = Vue.extend({})

routerMap(router)
router.alias({
    '/': '/a/home'
})
if (token) {
    Vue.http.headers.common['Authorization'] = 'Bearer ' + token
}
router.start(app, '#app')
