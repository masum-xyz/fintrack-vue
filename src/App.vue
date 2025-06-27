<script setup>
import {RouterView, RouterLink} from 'vue-router'
import Dashboard from "@/pages/Dashboard.vue";
</script>

<template>
  <header style="padding: 1rem; background: #2c3e50; color: white;">
    <h1>💰 FinTrack</h1>
    <nav>
      <RouterLink to="/" style="margin-right: 10px;">Dashboard</RouterLink>
      <RouterLink to="/add">Tambah</RouterLink>
    </nav>
  </header>

  <main style="padding: 1rem;">
    <RouterView/>
  </main>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
}

a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
