<template>
<!--  navigase bawah home, riwayat, kategori -->
  <nav class="bg-gray-800 text-white p-4">
    <ul class="flex justify-around">
      <li>
        <RouterLink to="/" class="text-white hover:text-gray-300">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/riwayat" class="text-white hover:text-gray-300">Riwayat</RouterLink>
      </li>
      <li>
        <RouterLink to="/kategori" class="text-white hover:text-gray-300">Kategori</RouterLink>
      </li>
    </ul>
  </nav>

  <main class="p-4">
    <RouterView />
  </main>
</template>