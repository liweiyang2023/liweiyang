import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Index.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/pages/Test.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
