import { createRouter, crearteWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    }
]
 
const router = createRouter({
    history: crearteWebHistory(process.env.BASE_URL),
    routes
})
 
export default router
