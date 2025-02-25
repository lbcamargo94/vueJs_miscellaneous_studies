<script setup lang="ts">
defineProps<{
  list_of_names: string[],
  list_of_pets: { name: string, sex: string, age: number, image_url: string }[]
}>()

</script>

<template>
  <div class="v-for-component-container">
    <!-- Name List -->
    <div class="v-for-component-name-list">
      <h2>List of names</h2>
      <ul class="v-for-component-name-list-ul">
        <li v-for="name in list_of_names" :key="name" class="v-for-component-name-list-li">
          <p class="v-for-component-name-list-text">
            {{ name }}
          </p>
        </li>
      </ul>
    </div>

    <!-- Pet List -->
    <div class="v-for-component-pet-list">
      <h2>List of pets</h2>
      <ul class="v-for-component-pet-list-ul">
        <li v-for="pet in list_of_pets" :key="pet.name" class="v-for-component-pet-list-li">
          <img ref="pet-image" :src="pet.image_url" alt="Pet Image" class="v-for-component-pet-list-img" />
          <p class="v-for-component-pet-list-text">nome: {{ pet.name }}</p>
          <p class="v-for-component-pet-list-text">sexo: {{ pet.sex === "male" ? "Macho" : "Fêmea" }}</p>
          <p class="v-for-component-pet-list-text">idade: {{ pet.age }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.v-for-component-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.v-for-component-name-list,
.v-for-component-pet-list {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.v-for-component-name-list-ul,
.v-for-component-pet-list-ul {
  list-style: none;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.25rem;
}


.v-for-component-name-list-li,
.v-for-component-pet-list-li {
  background-color: #ffffff;
  box-shadow: 3 3 3 #00000033;
  margin: 0.25rem;
  padding: 0 0.25rem;
  border-radius: 0.25rem;
}

.v-for-component-name-list-text,
.v-for-component-pet-list-text {
  font-size: 1rem;
  margin: 0;
  text-align: start;
}

.v-for-component-pet-list-img {
  border-radius: 0.25rem;
  height: auto;
  width: auto;
  max-height: 300px;
  max-width: 200px;
  object-fit: cover;
  object-position: center;
  margin: 0.25rem;
}
</style>
