<script>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig.js';
    export default {
        name: 'FormRegisterComponent',
        setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const successMessage = ref('');

    const registerUser = async () => {
      try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        successMessage.value = '¡Registro exitoso!';
        errorMessage.value = '';
        // Aquí podrías redirigir al usuario o realizar otras acciones
      } catch (error) {
        errorMessage.value = 'Error: ' + error.message;
        successMessage.value = '';
      }
    };

    return {
      email,
      password,
      registerUser,
      errorMessage,
      successMessage
    };
  }
    }
</script>

<template>
    <div class="container col-10 col-xs-6 col-sm-6 col-md-4"> 
        <h1 class="mt-2 formTitle">Crea una cuenta</h1>
        <form @submit.prevent="registerUser" class="mt-2 formLogin">
            <div class="mb-2 formLogin-contenedor">
                <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Nombre de Usuario</label>
                <input type="email" v-model="email" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="mi nombre de usuario">
            </div>
            <div class="mb-3 formLogin-contenedor">
                <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Correo Electronico</label>
                <input type="email" v-model="password" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="micorreo@ejemplo.com">
            </div>
            <div class="mb-3 formLogin-contenedor">
                <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Constraseña</label>
                <input type="email" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="**************">
            </div>
            <button class="btn btn-primary formLogin-contenedor__button" type="submit">iniciar sesión</button>
            <p v-if="errorMessage" class="text-danger mt-2">{{ errorMessage }}</p>
            <p v-if="successMessage" class="text-success mt-2">{{ successMessage }}</p>       
        </form>
        <h4 class="formTextToRegister">Ya tienes una cuenta?  <RouterLink to="/">Haz click aquí!</RouterLink></h4>
    </div>
</template>