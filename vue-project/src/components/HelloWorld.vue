<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="hello-container">
    <H1>
      Hello World!!
    </H1>
    <h3>
      {{ msg }}
    </h3>
  </div>
</template>

<style>
h1 {
  font-weight: 600;
}

h3 {
  font-size: 1.2rem;
}

.hello-container {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  padding: 1rem;
}
</style>
