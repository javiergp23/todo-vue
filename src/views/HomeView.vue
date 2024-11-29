<script>
import FormLoginComponent from '@/components/FormLoginComponent.vue'

export default {
  name: 'HomeView',
  components: {
    FormLoginComponent
  }
}
</script>

<template>
  <main>
    <h1 class="mb-4 mt-4 text-center">Bienvenido a la aplicación ToDo</h1>
    <FormLoginComponent />
  </main>
</template>
