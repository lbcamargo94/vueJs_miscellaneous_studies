<script setup lang="ts">
import { ref } from 'vue';
const email = ref('');
const message = ref('');
const send_message = ref(false);
const send_message_button_is_disable = ref(true);


const handleSubmit = (e: Event) => {
  e.preventDefault();
  alert(`
  Email: ${email.value}
  Message: ${message.value}
  `);

  send_message.value = true;
  email.value = '';
  message.value = '';
  send_message_button_is_disable.value = true;
}

const validateFormsFields = (): void => {
  const valid_name = message.value.length > 3;
  const valid_email = email.value.length > 10;
  const validate = valid_email && valid_name;

  send_message_button_is_disable.value = !validate;

  console.log({
    validate,
    send_message_button_is_disable,
  });

}
</script>

<template>
  <div class="prevent-default-container">
    <form action="http://localhost:9000/" class="prevent-default-form" @submit.prevent="handleSubmit">
      <label for="input-email" class="prevent-default-label">
        E-mail:
        <input id="input-email" type="email" class="prevent-default-input" placeholder="Digite seu email." @change="(e: Event) => {
          email = (e.target as HTMLInputElement).value, validateFormsFields();
        }" :value="email" />
      </label>

      <label for="text-area-message" class="prevent-default-label">
        Mensagem:
        <textarea name="text-area-message" id="input-message" class="prevent-default-text-area-message" :value="message"
          placeholder="Digite uma mensagem que deseja enviar." @keypress="(e: Event) => {
            message = (e.target as HTMLTextAreaElement).value; validateFormsFields();
          }"></textarea>
      </label>

      <button type="submit" class="prevent-default-button" :disabled="send_message_button_is_disable">Enviar</button>
    </form>
  </div>
</template>

<style>
.prevent-default-container {
  align-items: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  padding: 1rem;
  width: 100%;
}

.prevent-default-form {
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  max-width: 400px;
  height: 100%;
}

.prevent-default-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
}

.prevent-default-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 400px;
}

.prevent-default-text-area-message {
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
}

.prevent-default-button {
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 200px;
}

.prevent-default-button:disabled {
  background-color: #ccc;
  color: #fff;
  cursor: not-allowed;
}

.prevent-default-button:enabled {
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.prevent-default-button:enabled:hover {
  background-color: #0069d9;
  color: #fff;
  cursor: pointer;
}

.prevent-default-button:enabled:active {
  background-color: #0062cc;
  color: #fff;
  cursor: pointer;
}

.prevent-default-button:enabled:focus {
  outline: none;
}

.prevent-default-button:enabled:disabled {
  background-color: #ccc;
  color: #fff;
  cursor: not-allowed;
}

.prevent-default-button:enabled:disabled:hover {
  background-color: #ccc;
  color: #fff;
  cursor: not-allowed;
}

.prevent-default-button:enabled:disabled:active {
  background-color: #ccc;
  color: #fff;
  cursor: not-allowed;
}

.prevent-default-button:enabled:disabled:focus {
  outline: none;
}
</style>
