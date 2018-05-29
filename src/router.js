import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import People from './pages/People.vue'
import Topics from './pages/Topics.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/people',
      name: 'people',
      component: People
    },
    {
      path: '/topics',
      name: 'topics',
      component: Topics
    }
  ]
})
