<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import EmitEvent from './emit-event/EmitEvent.vue';
</script>

<template>
  <main class="home-view">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <EmitEvent />
  </main>
</template>

<style>
.home-view {
  height: 100%;
  min-height: 900px;
  width: 100%;
  background-color: whitesmoke;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
}
</style>
