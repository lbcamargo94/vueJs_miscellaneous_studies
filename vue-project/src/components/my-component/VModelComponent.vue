<script setup lang="ts">
import { ref } from 'vue';

const message: string = ref('')
</script>

<template>
  <div class="v-model-component-container">
    <input type="text" v-model="message" class="v-model-component-input" />
    <p class="v-model-component-text">Message:</p>
    <div class="v-model-component-box-text">{{ message }}</div>
  </div>
</template>

<style>
.v-model-component-container {
  height: 100%;
  width: 100%;
  padding: 1rem;
}

.v-model-component-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
}

.v-model-component-box-text {
  background-color: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #333;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  min-height: 100px;
  overflow: auto;
  padding: 0.5rem;
  width: 100%;
}

.v-model-component-text {
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
