<script setup lang="ts">
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">Lorem Ipsum</h1>
      <h3 class="card-description">Why do we use it?</h3>
    </div>

    <div class="card-body">
      <img class="card-image" ref="card-image" src="https://picsum.photos/id/237/200/300" alt="Card Image" width="200px"
        height="300px" />
      <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout.</p>
    </div>

    <div class="card-footer">
      <button class="card-button">OK</button>
      <button class="card-button-close">Close</button>
    </div>

  </div>
</template>

<style>
.card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px #00000033;
  height: auto;
  margin: 1rem;
  max-height: 600px;
  max-width: 300px;
  overflow: hidden;
  width: auto;
}

.card-header {
  align-items: center;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

.card-description {
  font-size: 1rem;
  margin: 0;
}

.card-body {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
}

.card-image {
  border-radius: 10px;
  height: auto;
  max-height: 300px;
  max-width: 200px;
  object-fit: cover;
  width: auto;
}

.card-text {
  font-size: 1rem;
  margin: 0;
  text-align: start
}

.card-footer {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
}

.card-button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.card-button-close {
  background-color: #dc3545;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
</style>
