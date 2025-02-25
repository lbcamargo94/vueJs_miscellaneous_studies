<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import WorkingWithComponents from './working-with-components/WorkingWithComponents.vue'
import VIfDirective from './v-if-directive/VIfDirective.vue'
import VForDirective from './v-for-directive/VForDirective.vue'

</script>

<template>
  <main class="home-view">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <WorkingWithComponents />
    <VIfDirective />
    <VForDirective />
  </main>
</template>

<style>
.home-view {
  height: 100%;
  width: 100%;
  min-height: 1280px;
  min-width: 720px;
  background-color: whitesmoke;
}
</style>
