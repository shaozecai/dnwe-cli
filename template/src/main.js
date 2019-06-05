import Vue from 'vue'
import router from '@/router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import storeObj from '@/store'
import Main from '@/main.vue'
import VuexI18n from 'vuex-i18n'
import i18n from './local/index'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(ElementUI, {locale: zhLocale})
Vue.use(Vuex)
const store = new Vuex.Store(storeObj)
Vue.use(VuexI18n.plugin, store)
Vue.i18n.set('zh-CN')

Vue.i18n.add('zh-CN',i18n['zh-CN']);
Vue.i18n.add('en',i18n['en']);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
})
