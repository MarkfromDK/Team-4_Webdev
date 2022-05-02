import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/FrontPage.vue'
import ShopPage from '../views/ShopPage.vue'
const routes = [
    {
        path: '/',
        name: 'FrontPage',
        component: FrontPage
    },
    {
        path: '/Shop',
        name: 'Shop',
        component: ShopPage
    }
]
 
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
 
export default router