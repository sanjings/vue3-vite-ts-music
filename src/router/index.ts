import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeLayout from '../layouts/HomeLayout.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    redirect: '/discover',
    children: [
      {
        path: '/discover',
        name: 'discover',
        component: () => import(/* webpackChunkName: "Discover" */'../pages/Discover/index.vue'),
        redirect: '/discover/recommend',
        children: [
          {
            path: '/discover/recommend',
            name: 'recommend',
            component: () => import(/* webpackChunkName: "Recommend" */'../pages/Discover/Recommend/index.vue'),
          }
        ]
      },
      {
        path: '/my',
        name: 'my',
        component: () => import(/* webpackChunkName: "My" */'../pages/My/index.vue')
      },
      {
        path: '/friend',
        name: 'friend',
        component: () => import(/* webpackChunkName: "Friend" */'../pages/Friend/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router;