import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';
import Resume from '@/views/Resume.vue';
import Contact from '@/views/Contact.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/contact',
    component: Contact
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;