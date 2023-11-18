import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import mainLayoutRoutes from "@/router/mainLayout";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainLayout,
        children: [...mainLayoutRoutes]
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
