import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = function(r){
  require.ensure([],()=>{
    r(require('@/modules/home'))
  },'home')
}
const routes = [
  {
    "path": "/home",
    "name": "/home",
    "component": home,
    children:[]
  },
  {
    "path": "/",
    redirect: '/home' 
  }
]

const router = new Router({
  routes
})

export default router
