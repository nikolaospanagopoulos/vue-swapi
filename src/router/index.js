import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../Pages/HomePage'
import PeoplePage from '../Pages/PeoplePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
        path: '/people',
        name: 'PeoplePage',
        component: PeoplePage
      },
  ]
})