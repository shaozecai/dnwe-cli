import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const home = function(r){
  require.ensure([],()=>{
    r(require('@/modules/home'))
  },'home')
}
const github = function(r){
  require.ensure([],()=>{
    r(require('@/modules/github'))
  },'github')
}
const read = function(r){
  require.ensure([],()=>{
    r(require('@/modules/read'))
  },'read')
}
const note = function(r){
  require.ensure([],()=>{
    r(require('@/modules/note'))
  },'note')
}
const sum = function(r){
  require.ensure([],()=>{
    r(require('@/modules/sum'))
  },'sum')
}
const about = function(r){
  require.ensure([],()=>{
    r(require('@/modules/about'))
  },'about')
}
const routes = [
 
  {
    "path": "/home",
    "name": "/home",
    "component": home,
    children:[]
  },
  {
    "path": "/github",
    "name": "/github",
    "component": github,
    children:[]
  },
  {
    "path": "/",
    redirect: '/home' 
  },
  {
    "path": "/read",
    "name": "/read",
    "component": read,
    children:[]
  },
  {
    "path": "/note",
    "name": "/note",
    "component": note,
    children:[]
  },
  {
    "path": "/sum",
    "name": "/sum",
    "component": sum,
    children:[]
  },
  {
    "path": "/about",
    "name": "/about",
    "component": about,
    children:[]
  },
]

const router = new Router({
  routes
})

export default router
