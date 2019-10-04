import Vue from 'vue'
import Router from 'vue-router'
import Boards from './views/Boards.vue'
import Board from './views/Board.vue'
import SignUp from './views/SignUp.vue'
import LogIn from './views/Login.vue'
import Home from './views/Home.vue'
import store from './store/store';

Vue.use(Router)

function isLoggedIn(to, from, next) {
  store.dispatch('auth/authenticate').then(() => {
    next();
  }).catch(() => {
    next('/login');
  })
}


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter(to, from, next) {
        store.dispatch('auth/authenticate').then(() => {
          next('/boards');
        }).catch(() => {
          next('/login');
        });
      },
    },
    {
      path: '/boards',
      name: 'boards',
      component: Boards,
      beforeEnter: isLoggedIn
    },
    {
      path: '/board',
      name: 'board',
      component: Board,
      beforeEnter: isLoggedIn
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    }
  ]
})
