import { createRouter, createWebHistory } from 'vue-router';
import FormComponent from '../components/FormComponent.vue';
import PreviewComponent from '../components/PreviewComponent.vue';

const routes = [
  { path: '/form', component: FormComponent },
  { path: '/preview', component: PreviewComponent },
  { path: '/', redirect: '/form' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
