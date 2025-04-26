import { createWebHistory, createRouter } from 'vue-router'
import { createApp } from 'vue'
/**
    * Import your components here
 **/
import Home from '@/pages/Home.vue';
import wishlist from '@/pages/wishlist.vue';
import cart from '@/pages/cart.vue';

/**
 * This is a simple Vue.js router setup.
 * It imports necessary modules from Vue Router and Vue itself.
 */
const routes = [
    { path: '/', name:Home, component: Home },
    { path: '/wishlist', name:wishlist, component: wishlist },
    { path: '/cart', name:cart, component: cart },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;