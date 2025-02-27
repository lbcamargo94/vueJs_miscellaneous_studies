<script setup lang="ts">
const props = defineProps<{
  dogs_list: {
    name: string,
    image: string
  }[],
  selected_dog: {
    name: string,
    image: string
  },
}>()

const emit = defineEmits(['update-selected_dog'])

const emitEvent = (data_event: { name: string; image: string }) => {
  emit('update-selected_dog', data_event)
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <h1 class="card-title">{{ props.selected_dog.name.toUpperCase() }}</h1>
    </div>

    <div class="card-body">
      <img class="card-image" ref="card-image" :src="props.selected_dog.image" alt="Card Image" width="200px"
        height="200px" />
      <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout.</p>
    </div>
  </div>
  <!-- Trocar DOG -->
  <div>
    <button class="button-options" @click="emitEvent(props.dogs_list[0])">Dog 01</button>
    <button class="button-options" @click="emitEvent(props.dogs_list[1])">Dog 02</button>
    <button class="button-options" @click="emitEvent(props.dogs_list[2])">Dog 03</button>
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
  max-height: 200px;
  width: auto;
  max-width: 200px;
  object-fit: cover;
}

.button-options {
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin: 5px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.button-options:hover {
  background-color: #3e8e41;
}

.button-options:active {
  background-color: #3e8e41;
  transform: translateY(2px);
}

.button-options:focus {
  outline: none;
}
</style>
