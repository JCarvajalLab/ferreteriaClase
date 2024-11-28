<template>
<div class="container">
    <div class="header">
        <img alt="Logo Ferreretería" height="50" src="https://storage.googleapis.com/a1aa/image/iu35PWESDZ7zLJiXkZZGplmu1AEIwpIdmJfQ6DEgXNXOgy6JA.jpg" width="50" />
        <h1>FERRETERÍA HERRAMIENTAS Y SOLUCIONES</h1>
    </div>
    <div class="product-list">
        <button class="back-button" @click="regresarHome">Regresar al Home</button>
        <h2>Listado de Productos</h2>
        <div @click="verDetalleProducto(producto.id)" class="product" v-for="producto in productos" :key="producto.id">
            <h3>{{ producto.nombre }}</h3>
            <p>Categoría: {{ producto.categoria }}</p>
            <p>Precio: {{ producto.precio }}</p>
            <p>Descripción: {{ producto.descripcion }}</p>
            <p>Stock: {{ producto.stock }}</p>
        </div>
    </div>
    <div class="footer">
        <div>
            <p>REDES SOCIALES</p>
            <p>ICONO RED SOCIAL</p>
        </div>
        <div>
            <p>CONTACTO</p>
            <p>DIRECCION</p>
            <p>NUMERO TELEFONICOS</p>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ListadoProductos',
    data() {
        return {
            productos: []
        }
    },

    mounted() {
        axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json')
            .then(response => {
                this.productos = response.data.productos;
            })
            .catch(error => console.error(error));
    },
    methods: {
        regresarHome() {
            this.$router.push({
                name: 'home'
            }); // Redirigir a homeview.vue
        },
        verDetalleProducto(idProducto) {
            this.$router.push({
                name: 'detalleProducto',
                params: {
                    id: idProducto
                }
            });
        }
    }
}
</script>

<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.header {
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 20px;
}

.header img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
}

.header h1 {
    font-size: 24px;
    margin: 0;
}

.product-list {
    background-color: #e0e0e0;
    padding: 20px;
    margin: 20px;
    border-radius: 10px;
}

.product-list h2 {
    font-size: 24px;
    margin-bottom: 20px;
}

.product-list .product {
    display: inline-block;
    width: 25%;
    background-color: #fff;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-list .product h3 {
    font-size: 16px;
    margin: 0;
}

.product-list .product p {
    font-size: 14px;
    font-weight: bold;
    margin: 5px 0 0 0;
}

.back-button {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    margin-top: 20px;
}

.footer {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 20px;
}

.footer div {
    text-align: center;
}
</style>
