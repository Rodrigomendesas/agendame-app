import { needAuthentication } from './guards';

export default {
    path: '/',
    component: () => import('@/layouts/full/FullLayout.vue'),
    beforeEnter: needAuthentication,
    children: [
        {
            name: 'dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
    ]
};
