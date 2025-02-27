<script setup lang="ts">
import NotFound404Error from '@/components/my-component/NotFound404Error.vue';

</script>

<template>
  <div class="not-found-page">
    <h1>404 Not Found</h1>
    <NotFound404Error />
  </div>
</template>

<style>
.not-found-page {
  height: 100%;
  width: 100%;
  min-height: 1280px;
  min-width: 720px;
  background-color: darkgray;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
