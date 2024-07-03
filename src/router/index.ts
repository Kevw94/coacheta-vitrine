import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import FeaturesPage from '../views/FeaturesPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/features',
        name: 'Features',
        component: FeaturesPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
