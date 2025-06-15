import { createRouter, createWebHistory } from 'vue-router';
import i18n from '@/i18n';
import {routes} from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = i18n.global.t(`seo.${to.meta?.title ?? 'appName'}`);
});

export default router;
