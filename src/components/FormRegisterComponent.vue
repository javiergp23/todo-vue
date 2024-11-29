<script>
    export default {
        name: 'FormRegisterComponent'
    }
</script>

<template>
    <div class="container col-sm-6"> 
        <h1 class="mt-4 formTitle">Crea una cuenta</h1>
        <form action="" class="mt-4 formLogin">
            <div class="mb-3 formLogin-contenedor">
                <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Nombre de Usuario</label>
                <input type="email" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="mi nombre de usuario">
            </div>
            <div class="mb-3 formLogin-contenedor">
                <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Correo Electronico</label>
                <input type="email" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="micorreo@ejemplo.com">
            </div>
            <div class="mb-3 formLogin-contenedor">
                <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Constraseña</label>
                <input type="email" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="**************">
            </div>
            <button class="btn btn-primary formLogin-contenedor__button" type="submit">iniciar sesión</button>
        </form>
        <h4 class="formTextToRegister">Ya tienes una cuenta?  <RouterLink to="/">Haz click aquí!</RouterLink></h4>
    </div>
</template>