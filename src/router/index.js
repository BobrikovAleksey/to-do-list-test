import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/views/Main.vue';
import Today from '@/views/Today.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Main,
  },
  {
    path: '/incoming',
    name: 'Incoming',
    component: Main,
  },
  {
    path: '/today',
    name: 'Today',
    component: Today,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
