<template>
<div class="container">
    <div class="header">
        <img alt="Logo Ferretería" height="50" src="https://storage.googleapis.com/a1aa/image/tvQgTjaf9rReY0SjecNc7jBkS5MYVl8iWNJANK1VVCeh8WWPB.jpg" width="50" />
        <h1>
            FERRETERÍA HERRAMIENTAS Y SOLUCIONES
        </h1>
    </div>
    <div class="content">
        <a class="back-button" @click="regresarListadoProductos">
            Regresar Listado Productos
        </a>
        <h2>
            Detalle Producto
        </h2>
        <div class="product-details">
            <h3>
                {{ producto.categoria }}
            </h3>
            <p class="product-name">
                {{ producto.nombre }}
            </p>
            <p>
                {{ producto.descripcion }}
            </p>
            <div class="product-info">
                <p>
                    Precio: {{ producto.precio }}
                </p>
                <p>
                    Stock: {{ producto.stock }}
                </p>
            </div>
        </div>
    </div>
    <div class="footer">
        <div>
            <p>
                REDES SOCIALES
            </p>
            <p>
                ICONOS REDES SOCIALES
            </p>
        </div>
        <div>
            <p>
                CONTACTO
            </p>
            <p>
                DIRECCION
            </p>
            <p>
                NUMERO TELEFONICOS
            </p>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'DetalleProducto',
    data() {
        return {
            producto: {}
        }
    },
    methods: {
        regresarListadoProductos() {
            this.$router.push({
                name: 'listadoProductos'
            });
        }
    },
    mounted() {
        const idProducto = this.$route.params.id;
        axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/productos.json')
            .then(response => {
                const productos = response.data.productos;
                const productoEncontrado = productos.find(producto => producto.id === parseInt(idProducto));
                if (productoEncontrado) {
                    this.producto = productoEncontrado;
                } else {
                    console.error('No se encontró el producto con el ID', idProducto);
                }
            })
            .catch(error => console.error(error));
    }
}
</script>

<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 2px solid #000;
    margin: 20px;
    background-color: #fff;
}

.header img {
    width: 50px;
    height: 50px;
}

.header h1 {
    font-size: 24px;
    margin: 0;
}

.content {
    padding: 20px;
    background-color: #d3d3d3;
    margin: 20px;
    border-radius: 10px;
}

.content h2 {
    font-size: 36px;
    color: #666;
}

.product-details {
    background-color: #007bff;
    color: #fff;
    padding: 20px;
    max-width: 300px;
    margin: 0 auto;
    border-radius: 10px;
    margin-top: 20px;
}

.product-details h3 {
    font-size: 18px;
    margin: 0;
}

.product-details p {
    margin: 5px 0;
}

.product-details .product-name {
    font-size: 24px;
    font-weight: bold;
}

.product-details .product-info {
    display: flex;
    justify-content: space-between;
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
    border: 2px solid #000;
    margin: 20px;
    background-color: #fff;
}
</style>
