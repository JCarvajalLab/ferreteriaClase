Excelente decisión! Un login es un componente fundamental en cualquier aplicación. Aquí te dejo un ejemplo básico de un login en Vue 3 que puedes adaptar a tus necesidades:
HTML
<template>
  <div class="login-container">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    <p>
      ¿No tienes cuenta? <router-link to="/registro">Regístrate</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Aquí iría la lógica para autenticar al usuario
      // Por ejemplo, podrías hacer una petición AJAX a un servidor
      // para verificar las credenciales del usuario
      console.log('Login intentado con email:', this.email, 'y contraseña:', this.password)
    }
  }
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="email"], input[type="password"] {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  width: 100%;
  height: 40px;
  background-color: #4CAF50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>