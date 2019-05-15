import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Holiday from './views/Holiday.vue'
import Author from './views/Author.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/holiday',
      name: 'holiday',
      component: Holiday
    },
    {
      path: '/author',
      name: 'author',
      component: Author
    }
  ]
})
