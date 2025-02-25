<script setup lang="ts">
import { ref } from 'vue';

const user_name = "John Doe";
const login_text = "Login";
const logout_text = "Logout";
const is_user_logged_in = ref(false);

const change_login = () => {
  is_user_logged_in.value = !is_user_logged_in.value;
  console.log(is_user_logged_in);
}

</script>

<template>
  <div class="v-if-directive-container">
    <h1>V-If Directive</h1>
    <div v-if="is_user_logged_in">
      <h2>Welcome, {{ user_name }}!</h2>
      <p>You are logged in.</p>
    </div>
    <button class="button-change-login" @click="change_login">
      {{ is_user_logged_in ? logout_text : login_text }}
    </button>
  </div>

</template>

<style>
.v-if-directive-container {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  padding: 1rem;
}

.button-change-login {
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
}
</style>
