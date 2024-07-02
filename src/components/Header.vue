<script setup lang="ts">
</script>

<template>
  <header class="flex justify-between items-center py-6 px-8 bg-gray-800 text-white">
    <div class="flex items-center">
      <img src="../assets/imgs/coacheta.svg" alt="logo" class="h-10 mr-3" />
      <h1 class="text-2xl font-bold">Coacheta</h1>
    </div>
    <nav>
      <ul class="flex space-x-4">
        <li><router-link to="/" class="hover:text-gray-400">Home</router-link></li>
        <li><router-link to="/about" class="hover:text-gray-400">About</router-link></li>
        <li><router-link to="/features" class="hover:text-gray-400">Features</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
</style>
