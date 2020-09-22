import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store.js'
import painel from './painel.vue'
import FormIncluir from './FormIncluir.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path:'/', component: painel}
    ,{path: '/incluir', component: FormIncluir}
  ]
})
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
