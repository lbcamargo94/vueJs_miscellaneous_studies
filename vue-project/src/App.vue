<script setup lang="ts">
import {
  // RouterLink,
  RouterView
} from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50px" height="50px" />
    <span class="title">MY VUE.JS</span>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: center;
  line-height: 1.5;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
}

.logo {
  box-sizing: border-box;
  display: block;
}

.title {
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-weight: 400;
  text-align: center;
  width: 100%;
  height: 100%;
  padding-right: 50px;
}
</style>
