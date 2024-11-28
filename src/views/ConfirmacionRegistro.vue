<template>
<div class="container mt-5">
    <div class="card mx-auto" style="max-width: 400px;">
        <div class="card-body">
            <div class="card-header alert alert-success">Confirmación</div>
            <h4 class="card-title text-center">{{ mensaje }}</h4>

            <router-link to='/Home' class="btn btn-primary w-100">Regresar al Home</router-link>
        </div>

    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ConfirmacionProveedor',
    data() {
        return {
            mensaje: '',
            status: ''
        }
    },
    methods: {
        confirmar() {
            axios.get('https://raw.githubusercontent.com/shaka0241/ferreteria_Api/main/registroresp.json')
                .then(response => {
                    this.mensaje = response.data.respuestaRegistro.mensaje,
                        this.status = response.data.respuestaRegistro.status,
                        console.log(this.status)
                })
                .catch(error => {
                    console.error('error en la solicitud', error);
                })
        },
    },
    mounted() {
        this.confirmar();
    }
}
</script>
