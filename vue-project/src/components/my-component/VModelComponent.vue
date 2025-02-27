<script setup lang="ts">
import { ref } from 'vue';

const message = ref('')
const send_message = ref(false);
const send_success = ref(false);
const send_error = ref(false);
const success_message = "Menssagem enviada com sucesso!";
const error_messsage = "Error: menssage deve ter mais que 10 caracter e menos que 100 caracteres.";

const send_message_function = () => {
  if (message.value.length >= 10 && message.value.length <= 100) {
    send_message.value = true;
    send_success.value = true;
    send_error.value = false;
    message.value = "";
  } else {
    send_message.value = true;
    send_success.value = false;
    send_error.value = true;
  }
}
</script>

<template>
  <div class="v-model-component-container">
    <input type="text" v-model="message" class="v-model-component-input" />
    <p class="v-model-component-text">Message:</p>
    <div class="v-model-component-box-text">{{ message }}</div>
    <button class="v-model-component-button" @click="send_message_function">Enviar Menssagem</button>
    <p :class="send_message && send_success ? 'success_message' : 'error_messsage'">
      {{ send_message && send_success ? success_message : '' }}
      {{ send_message && send_error ? error_messsage : '' }}
    </p>
  </div>
</template>

<style>
.v-model-component-container {
  height: 100%;
  width: 100%;
  padding: 1rem;
}

.v-model-component-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
}

.v-model-component-box-text {
  background-color: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: #333;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  min-height: 100px;
  overflow: auto;
  padding: 0.5rem;
  width: 100%;
}

.v-model-component-text {
  font-size: 1rem;
  margin-top: 1rem;
}

.v-model-component-button {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}

.success_message {
  color: green;
}

.error_messsage {
  color: red;
}
</style>
