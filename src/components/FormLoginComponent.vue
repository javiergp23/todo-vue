<script>
import { ref } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../../firebaseConfig.js';

    export default {
        name: 'FormLoginComponent',
        setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const loginUser = async () => {
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('Usuario autenticado');
        // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
      } catch (error) {
        errorMessage.value = 'Error: ' + error.message;
      }
    };

    return {
      email,
      password,
      loginUser,
      errorMessage
    };
  }
    }
</script>

<template>
    <div class="container col-10 col-xs-8 col-sm-6 col-md-4"> 
        <h1 class="mt-2 formTitle">Inicia sesión</h1>
        <form @submit.prevent="loginUser" class="mt-2 formLogin">
            <div class="mb-3 formLogin-contenedor">
                <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Correo Electronico</label>
                <input type="email" v-model="email" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="micorreo@ejemplo.com">
            </div>
            <div class="mb-3 formLogin-contenedor">
                <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Constraseña</label>
                <input type="email" v-model="password" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="**************">
            </div>
            <button class="btn btn-primary formLogin-contenedor__button" type="submit">iniciar sesión</button>
            <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
        </form>
        <h4 class="formTextToRegister">Aún no estás registrado?  <RouterLink to="/register">Haz click aquí!</RouterLink></h4>
    </div>
</template>
