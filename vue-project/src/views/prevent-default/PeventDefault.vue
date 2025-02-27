<script setup lang="ts">
import PreventDefaultComponent from '../../components/my-component/PeventDefaultComponent.vue';

</script>

<template>
  <div class="prevent-default-container">
    <h1 class="prevent-default-title">Prevent Default</h1>
    <PreventDefaultComponent />
  </div>
</template>

<style>
.prevent-default-container {
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
}

.prevent-default-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
</style>
