import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        path: '/about',
        name: 'Test',
        component: 'Test'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router