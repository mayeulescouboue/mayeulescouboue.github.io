<!-- App.vue -->
<template>
  <div>
    <RouterView/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import router from './router';
import HomeView from './views/HomeView.vue';
</script>

<style>
:root {
  overscroll-behavior: none;
}
</style>