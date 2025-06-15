import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import { PATH } from './path';
import i18n from '@/i18n';
import { LAYOUT_DEFAULT_KEY } from '@/common';

const UserIndex = () => import('@/pages/users/UserIndex.vue');
const NotFound = () => import('@/pages/errors/notFound.vue');

const routes: RouteRecordRaw[] = [
  {
    path: PATH.USERS,
    component: UserIndex,
    name: 'users.index',
    meta: {
      layout: LAYOUT_DEFAULT_KEY,
      title: 'users',
    },
  },
  {
    path: PATH.NOT_FOUND,
    component: NotFound,
    name: 'errors.notFound',
    meta: {
      title: 'notFound',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const defaultTitle = i18n.global.t('seo.appName');
  const title = to.meta.title ? i18n.global.t(`seo.${to.meta.title as string}`) : defaultTitle;

  document.title = title;
});

export default router;
