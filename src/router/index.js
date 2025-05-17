import { createRouter, createWebHistory } from 'vue-router';

// Views
import LoginSignup from '@/views/LoginSignup.vue';
import Dashboard from '@/views/Dashboard.vue';
import Profile from '@/views/Profile.vue';
import Settings from '@/views/Settings.vue';
import Monitoring from '@/views/Monitoring.vue';

const routes = [
  {
    path: '/',
    name: 'LoginSignup',
    component: LoginSignup
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: Monitoring
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
