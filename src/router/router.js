import { createRouter, createWebHistory } from 'vue-router';
import AccueilComponent from '../components/AccueilComponent.vue';
import ConnexionComponent from '../components/ConnexionComponent.vue';

const routes = [
    {
        path: '/accueil',
        name: 'AccueilComponent',
        component: AccueilComponent
    },
    {
        path: '/',
        name: 'ConnexionComponent',
        component: ConnexionComponent
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;