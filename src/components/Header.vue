<template>
  <header class="flex justify-between items-center py-6 px-8 bg-gray-800 text-white font-bold">
    <div class="flex items-center">
      <router-link to="/" class="flex items-center text-gradient hover:text-gradient">
        <img src="../assets/imgs/coacheta.svg" alt="logo" class="h-10 mr-3" />
        <h1 class="text-2xl font-bold">Coacheta</h1>
      </router-link>
    </div>
    <nav :class="{'hidden': !isMenuOpen}" class="md:flex space-x-8">
      <ul class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/features" class="nav-link">Features</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
      </ul>
    </nav>
    <button @click="toggleMenu" class="block md:hidden">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.text-gradient {
  background-image: linear-gradient(to right, #5BC0BE, #9EFFF0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.text-gradient:hover {
  color: #9EFFF0;
}

.nav-link {
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #9EFFF0;
}

@media (max-width: 768px) {
  nav {
    display: none;
  }
  nav.hidden {
    display: flex;
  }
  nav ul {
    flex-direction: column;
  }
}
</style>
