<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/header/HeaderComponent.vue'
</script>

<template>
  <div class="app-container">
    <HeaderComponent />
    <h1 class="app-title"> My Vue Tester App</h1>
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 100vh;
}

.app-title {
  font-size: 2rem;
  text-align: center;
  background-color: whitesmoke;
  padding: 1rem;
}
</style>
