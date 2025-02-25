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

.hello-container {
  background-color: whitesmoke;
}
</style>
