import { createRouter, createWebHashHistory } from 'vue-router';
import StartView from '../views/StartView.vue';
import RingingView from '../views/RingingView.vue';
import ConnectedView from '../views/ConnectedView.vue';
import AnsweredView from '../views/AnsweredView.vue';

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/ringing',
    name: 'ringing',
    component: RingingView,
    props: true
  },
  {
    path: '/connected',
    name: 'connected',
    component: ConnectedView
  },
  {
    path: '/answered',
    name: 'answered',
    component: AnsweredView
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
