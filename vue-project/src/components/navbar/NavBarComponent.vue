<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">Home</router-link>
    <router-link to="/working_with_components" class="nav-link">Components</router-link>
    <router-link to="/v_if_directive" class="nav-link">V-IF</router-link>
    <router-link to="/v_for_directive" class="nav-link">V-For</router-link>
    <router-link to="/v_model_directive" class="nav-link">V-Model</router-link>
    <router-link to="/submission_event" class="nav-link">Submission</router-link>
    <router-link to="/prevent_default" class="nav-link">Prevent Default</router-link>
  </nav>
</template>

<style>
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #f0f0f0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #ddd;
}

.nav-link.router-link-active {
  background-color: #007bff;
  color: #fff;
}
</style>
