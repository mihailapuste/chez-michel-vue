import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView/index.vue';
import MenuView from '../views/MenuView/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView,
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: () => import('../views/ReserveView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
