import Router from 'vue-router';
import HomePage from '@/components/pages/HomePage'
import AboutPage from '@/components/pages/AboutPage'
import ExamplePage from '@/components/pages/ExamplePage'

const baseRoutes = [
    {
        path: '/home',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage,
    },
    {
        path: '/examples',
        name: 'examples',
        component: ExamplePage,
    },
    {
        path: '*',
        redirect: {
            name: 'home',
        },
    },
];

const routes = baseRoutes;
export default new Router({
    routes,
});