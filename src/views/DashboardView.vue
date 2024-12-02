<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import ButtonComponent from '@/components/ButtonComponent.vue'
import ModalComponent from '@/components/ModalComponent.vue'

    export default {
        name: 'CrudView',
        components: {
            ButtonComponent,
            ModalComponent
        },
        setup() {
            const store = useStore();
            const router = useRouter();

            // Comprobar si el usuario está autenticado antes de cargar el componente
            onBeforeMount(() => {
            if (!store.getters.isAuthenticated) {
                // Si no está autenticado, redirigir al login
                router.push('/');
            }
            });

            return {};
        }
    };
    
</script>

<template>
    <div class="container col-sm-9">
        <h1 class="formTitle mb-4 mt-2">
            Dashboard
        </h1>
        <table class="table tabla-crud table-dark table-striped">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Tarea</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Etiqueta</th>
                    <th scope="col">Fecha limite</th>
                    <th scope="col">Completar o eliminar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        
        <ModalComponent />
        <ButtonComponent />
    </div>
</template>