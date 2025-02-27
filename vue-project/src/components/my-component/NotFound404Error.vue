<script setup lang="ts">

</script>

<template>
  <div class="error-container">
    <h1 class="error-code">404</h1>
    <p class="error-message">Página não encontrada</p>
    <router-link to="/" class="home-button">Voltar para a Home</router-link>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f8f9fa;
  color: #333;
}

.error-code {
  font-size: 6rem;
  font-weight: bold;
  margin: 0;
}

.error-message {
  font-size: 1.5rem;
  margin: 10px 0;
}

.home-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;
}

.home-button:hover {
  background-color: #0056b3;
}
</style>
