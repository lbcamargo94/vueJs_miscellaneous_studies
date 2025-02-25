<script setup lang="ts">
import VModelComponent from '../../components/my-component/VModelComponent.vue'
</script>

<template>
  <div class="v-model-directive-container">
    <h1 class="v-model-directive-title">V-Model Directive</h1>
    <VModelComponent />
  </div>
</template>

<style>
.v-model-directive-container {
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  padding: 1rem;
}

.v-model-directive-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
