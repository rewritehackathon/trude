import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/assetCategory/:type',
      name: 'AssetCategory',
      props: true,
      component: () => import('./views/AssetCategory.vue')
    },
    {
      path:'/coverages',
      name:'Coverages',
      props:false,
      component: ()=> import('./views/Coverages.vue')
    },
    {
      path:'/assets',
      name: 'Assets',
      props: false,
      component: ()=> import ('./views/Assets.vue')
    },
    {
      path: '/after',
      name: 'PostHome',
      props: false,
      component: ()=> import ('./views/PostHome.vue')
    },
    {
      path: '/verify',
      name: 'VerifyDamages',
      props: false,
      component: ()=> import ('./views/VerifyDamages.vue')
    },
    {
      path: '/confirm',
      name: 'ClaimConfirmed',
      props: false,
      component: ()=> import ('./views/Confirm.vue')
    }
  ]
})
