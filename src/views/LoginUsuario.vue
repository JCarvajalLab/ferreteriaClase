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
         <button type="button" class="" @click="login()">Iniciar Sesión</button>
    </form>
    <p>
      ¿No tienes cuenta? <router-link to="/registro">Regístrate</router-link>
    </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "loginUsuario",
  data() {
    return {
          user: {
              email: 'usuario@ejemplo.com',//modificar
              password: 'contraseñaSegura',//dejar vacio
          }
    }
  },
  methods: {
login() {
          if (!this.user.email || !this.user.password) {
              alert('Debes llenar todos los campos')
          }
          else {
              axios.get(`https://raw.githubusercontent.com/shaka0241/tiendaMascotaApi/main/login.json`)
                  .then((resp) => {
                      if (this.user.email === resp.data.loginRequest.email && this.user.password === resp.data.loginRequest.password) {
                          alert('logueado'),
                          this.$router.push({ name: 'home' })
                      } else {
                          alert('no logueado')
                      }
                  })
                  .catch((error) => {
                      console.log("error en la solicitud", error)
                  })
          }
      },

  },
}
</script>

<style scoped>

.login-container {
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

input[type="email"], input[type="password"] {
  width: 100%;
  height: 45px;
  margin-bottom: 20px;
  padding: 3px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

input[type="email"]:focus, input[type="password"]:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

button[type="button"] {
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

button[type="button"]:hover {
  background-color: #e91e63;
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