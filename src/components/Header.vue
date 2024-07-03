<template>
  <header class="flex justify-between items-center py-6 px-8 bg-gray-800 text-white font-bold">
    <div class="flex items-center">
      <router-link to="/" class="flex items-center text-gradient hover:text-gradient">
        <img src="../assets/imgs/coacheta.svg" alt="logo" class="h-10 mr-3" />
        <h1 class="text-2xl font-bold">Coacheta</h1>
      </router-link>
    </div>
    <nav>
      <ul class="flex space-x-8">
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/features" class="nav-link">Features</router-link></li>
        <li><router-link to="/about" class="nav-link">About</router-link></li>
      </ul>
    </nav>
  </header>
</template>

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
</style>
