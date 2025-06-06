import { createRouter, createWebHistory } from 'vue-router';
import FormComponent from '../components/FormComponent.vue';
import PreviewComponent from '../components/PreviewComponent.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    { path: '/form', component: FormComponent },
    { path: '/preview', component: PreviewComponent },
    { path: '/', redirect: '/form' }
  ]
});

export default router;
