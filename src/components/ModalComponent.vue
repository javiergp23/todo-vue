<script>
import ButtonComponent from './ButtonComponent.vue';
    export default {
        name: 'ModalComponent',
        components: {
            ButtonComponent
        },
        
    }
</script>

<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Agrega una nueva tarea</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" class="mt-1">
                        <div class="mb-3 formLogin-contenedor">
                            <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Titulo de la tarea</label>
                            <input type="email" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="">
                        </div>
                        <div class="mb-3 formLogin-contenedor">
                            <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Descripción de la tarea</label>
                            <input type="email" class="form-control formLogin-contenedor__input" id="exampleFormControlInput1" placeholder="">
                        </div>
                        <div class="mb-3 formLogin-contenedor">
                            <select class="form-select formLogin-contenedor__input formLogin-contenedor-select__option" aria-label="Default select example">
                                <option selected>Estado</option>
                                <option value="1">Pendiente</option>
                                <option value="2">En Proceso</option>
                                <option value="3">Finalizado</option>
                            </select>
                        </div>
                        <div class="mb-3 formLogin-contenedor">
                            <select class="form-select formLogin-contenedor__input formLogin-contenedor-select__option" aria-label="Default select example">
                                <option selected>Etiqueta</option>
                                <option value="1">Personal</option>
                                <option value="2">Trabajo</option>
                                <option value="3">Familia</option>
                            </select>
                        </div>
                        <div class="mb-3 formLogin-contenedor">
                            <label for="exampleFormControlInput1" class="form-label formLogin-contenedor__label">Fecha limite</label>
                            <input class="formSelectDate" type="date" id="fecha" name="fecha" required>
                        </div>
                    </form>
                    <div class="d-flex modal-footer">
                        <ButtonComponent/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>