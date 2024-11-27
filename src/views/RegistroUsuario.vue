<template>
  <div class="registro-container">
    <button class="btn-regresar" @click="regresarAlLogin">Regresar al Login</button>
    <h1>Registro de Usuario</h1>
    <form @submit.prevent="registrarUsuario">
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" v-model="nombre" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono</label>
        <input type="tel" id="telefono" v-model="telefono" required />
      </div>
      <div class="form-group">
        <label for="contrasena">Contraseña</label>
        <input type="password" id="contrasena" v-model="contrasena" required />
      </div>
      <div class="form-group">
        <label for="repetirContrasena">Repetir Contraseña</label>
        <input type="password" id="repetirContrasena" v-model="repetirContrasena" required />
      </div>
      <button type="submit">Regístrate</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      email: '',
      telefono: '',
      contrasena: '',
      repetirContrasena: ''
    };
  },
  methods: {
    registrarUsuario() {
      console.log('Usuario registrado:', {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,
        contrasena: this.contrasena,
        repetirContrasena: this.repetirContrasena
      });
    },
    regresarAlLogin() {
      this.$router.push('/login'); 
    }
  }
};
</script>

<style scoped>
.registro-container {
  max-width: 400px;
  margin: 80px auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  padding: 3px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="tel"]:focus,
input[type="password"]:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

button[type="submit"] {
  width: 100%;
  height: 45px;
  background-color: #ff4081;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #e91e63;
}

.btn-regresar {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #ff4081; /* Color de fondo */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  padding: 10px 15px; /* Espaciado interno */
  cursor: pointer; /* Cambia el cursor al pasar el mouse */
  font-size: 16px; /* Tamaño de fuente */
  transition: background-color 0.3s; /* Transición suave para el hover */
}

.btn-regresar:hover {
  background-color: #e91e63; /* Color de fondo al pasar el mouse */
}

p {
  text-align: center;
  margin-top: 20px;
}

a {
  color: #ffd54f;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>