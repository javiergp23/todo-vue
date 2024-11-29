<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
  <header>
    <NavbarComponent />
  </header>
  <RouterView />
  <FooterComponent/>
</template>

<style lang="scss">
@import "@/styles/main.scss";
</style>
