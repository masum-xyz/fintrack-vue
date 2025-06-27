<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div class="app-bg min-h-screen">
    <header class="header">
      <h1 class="logo">💰 FinTrack</h1>
      <nav class="nav">
        <RouterLink to="/" class="nav-link">Dashboard</RouterLink>
        <RouterLink to="/add" class="nav-link">Tambah</RouterLink>
      </nav>
    </header>
    <main class="container">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-bg {
  min-height: 100vh;
  background: #f4f6fa;
}
.header {
  padding: 1.5rem 2rem;
  background: #2c3e50;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
}
.logo {
  font-size: 1.7rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.nav {
  display: flex;
  gap: 1.5rem;
}
.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  transition: background 0.2s;
}
.nav-link.router-link-active,
.nav-link:hover {
  background: #34495e;
  font-weight: bold;
  text-decoration: underline;
}
.container {
  padding: 15px 20px;
}
</style>