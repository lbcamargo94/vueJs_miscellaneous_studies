<script setup lang="ts">
// Import of components
import MyComponent from '../../components/my-component/MyComponentCard01.vue'
</script>

<template>
  <div class="working-with-components-container">
    <MyComponent />
  </div>
</template>

<style>
.working-with-components-container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem;
}
</style>
