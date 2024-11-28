<template>
<div class="container">
    <div class="header">
        <img alt="Logo Ferretería" height="100" src="https://storage.googleapis.com/a1aa/image/0IYMCkPuB0onBF8jkh28DKUfsmeXvcVF7qoZdU1fSUkzHtqnA.jpg" width="100" />
        <h1>
            FERRETERÍA HERRAMIENTAS Y SOLUCIONES
        </h1>
    </div>
    <div class="section">
        <h2>
            PROVEEDORES
        </h2>
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
        <tr>
          <td>nombre_proveedor1</td>
          <td>email_proveedor1</td>
          <td>telefono_proveedor1</td>
          <td>direccion_proveedor1</td>
        </tr>
        <tr>
          <td>nombre_proveedor2</td>
          <td>email_proveedor2</td>
          <td>telefono_proveedor2</td>
          <td>direccion_proveedor2</td>
        </tr>
        <tr>
          <td>nombre_proveedor3</td>
          <td>email_proveedor3</td>
          <td>telefono_proveedor3</td>
          <td>direccion_proveedor3</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="section">
        <h2>
            PROMOCIONES ACTIVAS
        </h2>
        <div class="promotions">
            <div class="promotion">
                <h3>
                    Titulo Promocion 1
                </h3>
                <p>
                    <strong>
                        Valido fecha_desde1-fecha_hasta1
                    </strong>
                </p>
                <p>
                    Descripcion 1
                </p>
            </div>
            <div class="promotion">
                <h3>
                    Titulo Promocion 2
                </h3>
                <p>
                    <strong>
                        Valido fecha_desde-fecha_hasta2
                    </strong>
                </p>
                <p>
                    Descripcion 2
                </p>
            </div>
        </div>
    </div>
    <div class="product-list">
        <h2>
            Listado de Productos
        </h2>
        <button>
            VER LISTADO DE PRODUCTOS
        </button>
    </div>
    <div class="footer">
        <div>
            <p>
                REDES SOCIALES
            </p>
            <p>
                ICONOS REDES SOCIAL
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
export default {

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
        table, th, td {
            border: 1px solid #000;
        }
        th, td {
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
