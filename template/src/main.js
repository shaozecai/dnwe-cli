// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import storeObj from '@/store'
import VueI18n from 'vue-i18n'

import Main from '@/main.vue'
Vue.use(Vuex)
const store = new Vuex.Store(storeObj)

Vue.use(ElementUI)
Vue.use(VueI18n)

Vue.use(store)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
})
