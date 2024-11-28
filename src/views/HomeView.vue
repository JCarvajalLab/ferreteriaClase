<template>
<div class="container">
    <div class="header">
        <img alt="Logo Ferretería" height="100" src="https://storage.googleapis.com/a1aa/image/0IYMCkPuB0onBF8jkh28DKUfsmeXvcVF7qoZdU1fSUkzHtqnA.jpg" width="100" />
        <h1>{{ nombre }}</h1>
    </div>
    <div class="section">
        <h2>PROVEEDORES</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Teléfono</th>
                    <th>Dirección</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="proveedor in proveedoresActuales" :key="proveedor.nombre">
                    <td>{{ proveedor.nombre }}</td>
                    <td>{{ proveedor.contacto }}</td>
                    <td>{{ proveedor.telefono }}</td>
                    <td>{{ proveedor.direccion }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="section">
        <h2>PROMOCIONES ACTIVAS</h2>
        <div class="promotions">
            <div class="promotion" v-for="promocion in promocionesActuales" :key="promocion.descripcion">
                <h3>{{ promocion.descripcion }}</h3>
                <p><strong>Valido: {{ promocion.fechaInicio }} - {{ promocion.fechaFin }}</strong></p>
            </div>
        </div>
    </div>
    <div class="product-list">
        <h2>LISTADO DE PRODUCTOS</h2>
        <button @click="verListadoProductos">VER LISTADO DE PRODUCTOS</button>
    </div>
    <div class="footer">
        <div>
            <p>REDES SOCIALES</p>
            <p>
                <a :href="redesSociales.facebook" target="_blank">Facebook</a>
                <a :href="redesSociales.twitter" target="_blank">Twitter</a>
                <a :href="redesSociales.instagram" target="_blank">Instagram</a>
            </p>
        </div>
        <div>
            <p>CONTACTO</p>
            <p>Dirección: {{ informacionGeneral.direccion }}</p>
            <p>Teléfono: {{ informacionGeneral.telefono }}</p>
            <p>Correo electrónico: {{ informacionGeneral.correoElectronico }}</p>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'HomeView',
    data() {
        return {
            nombre: '',
            informacionGeneral: [],
            redesSociales: [],
            proveedoresActuales: [],
            promocionesActuales: []
        }
    },
    methods: {
        getInfo() {
            axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/home.json')
                .then(resp => {
                    if (resp.data && resp.data.paginaHome) {
                        this.nombre = resp.data.paginaHome.nombre || ''; // Asignar nombre
                        this.informacionGeneral = resp.data.paginaHome.informacionGeneral || {}; // Asignar como objeto
                        this.redesSociales = resp.data.paginaHome.informacionGeneral.redesSociales || {}; // Asignar como objeto
                        this.proveedoresActuales = resp.data.paginaHome.proveedoresActuales || []; // Asignar como arreglo
                        this.promocionesActuales = resp.data.paginaHome.promocionesActuales || []; // Asignar como arreglo
                    } else {
                        console.error('La respuesta no tiene la estructura esperada', resp.data);
                    }
                })
                .catch(error => {
                    console.error('Error al obtener la información:', error); // Manejo de errores
                });
        },
        verListadoProductos() {
            this.$router.push({
                name: 'listadoProductos'
            }); 
        }
    },
    mounted() {
        this.getInfo()
    }
}
</script>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 80%;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.header img {
    width: 100px;
    height: 100px;
}

.header h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

.section {
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 20px;
}

.section h2 {
    font-size: 18px;
    margin: 0 0 10px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table,
th,
td {
    border: 1px solid #000;
}

th,
td {
    padding: 8px;
    text-align: left;
}

.promotions {
    display: flex;
    justify-content: space-between;
}

.promotion {
    width: 48%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
}

.promotion h3 {
    font-size: 16px;
    margin: 0 0 10px 0;
}

.promotion p {
    margin: 5px 0;
}

.product-list {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 20px;
}

.product-list h2 {
    font-size: 24px;
    margin: 0 0 20px 0;
}

.product-list button {
    background-color: #00bfff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.footer {
    display: flex;
    justify-content: space-between;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 10px;
}

.footer div {
    width: 48%;
}
</style>
