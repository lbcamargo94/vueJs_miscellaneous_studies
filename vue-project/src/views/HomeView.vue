<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import WorkingWithComponents from './working-with-components/WorkingWithComponents.vue'

</script>

<template>
  <main class="home-view">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <WorkingWithComponents />
  </main>
</template>

<style>
.home-view {
  height: 100%;
  width: 100%;
  min-height: 1280px;
  min-width: 720px;
  background-color: whitesmoke;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
