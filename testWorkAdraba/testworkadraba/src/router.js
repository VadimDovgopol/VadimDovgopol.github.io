import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import favorite from './views/favorite.vue'
import moviePage from './views/moviePage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: favorite
    },
    {
      path: '/moviePage',
      name: 'moviePage',
      component: moviePage
    }
  ]
})
