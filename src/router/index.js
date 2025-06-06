import { createRouter, createWebHistory } from 'vue-router';
import FormComponent from '../components/FormComponent.vue';
import PreviewComponent from '../components/PreviewComponent.vue';

const router = createRouter({
  history: createWebHistory('/vue-family-app/'),
  routes: [
    { path: '/', redirect: '/form' },
    { path: '/form', component: FormComponent },
    { path: '/preview', component: PreviewComponent },
  ]
});

export default router;
