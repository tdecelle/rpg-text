import Vue from 'vue'
import Router from 'vue-router'
import Level from '@/components/Level.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Level',
      component: Level
    }
  ]
})
