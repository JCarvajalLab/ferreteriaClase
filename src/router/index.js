import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import LoginUsuario from '../views/LoginUsuario.vue';
import RegistroUsuario from '../views/RegistroUsuario.vue';
import ConfirmacionRegistro from '../views/ConfirmacionRegistro.vue';
import ListadoProductos from '../views/ListadoProductos.vue';
import DetalleProducto from '../views/DetalleProducto.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', name: 'login', component: LoginUsuario },
    { path: '/registro', name: 'registro', component: RegistroUsuario },
    { path: '/confirmacion-registro', name: 'confirmacionRegistro', component: ConfirmacionRegistro },
    { path: '/home', name: 'home', component: HomeView },
    { path: '/productos', name: 'listadoProductos', component: ListadoProductos },
    { path: '/productos/:id', name: 'detalleProducto', component: DetalleProducto, props: true },
    { path: '/:catchAll(.*)', name: 'not-found', component: NotFound }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;