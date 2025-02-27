<script setup lang="ts">
// import NavBarComponent from '../navbar/NavBarComponent.vue';
</script>

<template>
  <header class="header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50px" height="50px" />
    <img src="" alt="">
    <NavBarComponent />
  </header>
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
</style>
