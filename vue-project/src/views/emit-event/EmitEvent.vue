<script setup lang="ts">
import EmitComponent from '@/components/emit-component/EmitComponent.vue';
import { ref } from 'vue';

const dogs_list: {
  name: string,
  image: string
}[] = [{
  name: 'Dog Bernardo',
  image: 'https://picsum.photos/id/1025/300/300'
}, {
  name: 'Dog Onaya',
  image: 'https://picsum.photos/id/1062/300/300'
}, {
  name: 'Dog Rufus',
  image: 'https://picsum.photos/id/837/300/300'
}]

const selected_dog = ref(dogs_list[0])
</script>

<template>
  <div class="emit-event">
    <h1 class="emit-event-title"> Emit Children To Father</h1>
    <EmitComponent :dogs_list="dogs_list" :selected_dog="selected_dog" @update-selected_dog="selected_dog = $event" />
  </div>
</template>

<style>
.emit-event {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
}

.emit-event-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}
</style>
