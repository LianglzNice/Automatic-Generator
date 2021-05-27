import {createRouter, createWebHashHistory}  from 'vue-router'

const routerOptions = [
    {
        path: '/',
        component: () => import('@/components/main/index.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routerOptions
})

export default router