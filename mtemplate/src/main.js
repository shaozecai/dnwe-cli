import Vue from 'vue'
import router from '@/router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'lib-flexible'
import 'element-ui/lib/theme-chalk/index.css'
import storeObj from '@/store'
import Main from '@/main.vue'

Vue.use(ElementUI)
Vue.use(Vuex)
const store = new Vuex.Store(storeObj)
Vue.use(store)


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
})
