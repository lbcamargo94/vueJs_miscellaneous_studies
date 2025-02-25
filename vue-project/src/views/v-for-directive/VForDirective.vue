<script setup lang="ts">
import VForComponent from '../../components/my-component/VForComponent.vue'

const list_of_names: string[] = ["Manoel", "Cláudio", "Thiago", "Márcio", "Daniela", "Rita", "Lúcia", "Raimunda"]
const list_of_pets = [
  { name: "Bacon", sex: "male", age: getRandomInt(10), image_url: "https://picsum.photos/id/837/300/200" },
  { name: "Oliva", sex: "female", age: getRandomInt(10), image_url: "https://picsum.photos/id/593/300/200" },
  { name: "Juquinha", sex: "male", age: getRandomInt(10), image_url: "https://picsum.photos/id/659/300/200" },
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
</script>

<template>
  <div class="v-for-directive-container">
    <h1>V-For Directive</h1>
    <VForComponent :list_of_names="list_of_names" :list_of_pets="list_of_pets" />
  </div>
</template>

<style>
.v-for-directive-container {
  height: 100%;
  width: 100%;
  padding: 1rem;
}
</style>
