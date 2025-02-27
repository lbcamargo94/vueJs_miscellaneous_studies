<script setup lang="ts">
import { ref } from 'vue';

const send_submission_forms = ref(false);

const name = ref('');
const email = ref('');
const age = ref(0);
const is_valid_forms_fields = ref(true);

const SubmissionEventForms = (): void => {
  send_submission_forms.value = true;
  alert(`
  Name: ${name.value}
  Email: ${email.value}
  Age: ${age.value}
  `);

  name.value = '';
  email.value = '';
  age.value = 0;
  is_valid_forms_fields.value = true;
};

const ValidateFormsFields = (): void => {
  const valid_name = name.value.length > 0;
  const valid_email = email.value.length > 0;
  const valid_age = age.value >= 0;
  const validate = valid_email && valid_name && valid_age;
  console.log({
    validate,
    is_valid_forms_fields: is_valid_forms_fields.value
  });

  is_valid_forms_fields.value = !validate;
}

</script>

<template>
  <div class="submission-event-container">
    <h1 class="submission-event-title">Submission Event</h1>
    <form class="submission-event-form" @submit.prevent="SubmissionEventForms">
      <label for="input-name" class="submission-event-label">
        Nome:
        <input id="input-name" type="text" class="submission-event-input" placeholder="Digite seu nome."
          @change="(e: Event) => { name = (e.target as HTMLInputElement).value; ValidateFormsFields(); }" value=""
          defaultValue="" />
      </label>

      <label for="input-email" class="submission-event-label">
        E-mail:
        <input id="input-email" type="email" class="submission-event-input" placeholder="Digite seu email."
          @change="(e: Event) => { email = (e.target as HTMLInputElement).value, ValidateFormsFields(); }" value=""
          defaultValue="" />
      </label>

      <label for="input-age" class="submission-event-label">
        Idade:
        <input id="input-age" type="number" class="submission-event-input"
          @input="(e: Event) => age = parseInt((e.target as HTMLInputElement).value)" value="0" defaultValue="0" />
      </label>

      <button type="submit" class="submission-event-button" :disabled="is_valid_forms_fields">Submit</button>
    </form>
  </div>
</template>


<style>
.submission-event-container {
  height: 100%;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
  padding: 1rem;
}

.submission-event-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.submission-event-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

.submission-event-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
}

.submission-event-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 200px;
}

.submission-event-button {
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 100px;
}

.submission-event-button:hover {
  background-color: #45a049;
}

.submission-event-button:active {
  background-color: #3e8e41;
}

.submission-event-button:focus {
  outline: none;
}

.submission-event-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
  color: #666666;
}

.submission-event-button:disabled:hover {
  background-color: #cccccc;
}

.submission-event-button:disabled:active {
  background-color: #cccccc;
}

.submission-event-button:disabled:focus {
  outline: none;
}
</style>
