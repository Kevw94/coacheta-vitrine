<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center gap-8 p-8">
    <div class="w-full text-center">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Coacheta</span>
        Your Fitness Assistant
      </h1>
    </div>
    <div class="mt-4 flex w-full items-center justify-center">
      <!-- Circular Background with Image -->
      <div class="relative flex-1 max-w-sm">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="circle"></div>
        </div>
        <img src="../assets/imgs/template_coacheta.svg" alt="Coacheta" class="relative z-10 mx-auto">
      </div>
      <!-- Card with Text -->
      <div class="card flex-1 p-8 ml-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <p class="text-lg text-gray-700 dark:text-gray-200">
          Coacheta, l'application mobile qui révolutionne votre expérience en matière de musculation et de suivi de vos performances physiques.
          Avec Coacheta, vous pouvez planifier et suivre vos séances de musculation en les partageant avec vos amis. Atteignez vos objectifs de force et de forme physique ensemble grâce à un outil complet et personnalisé.
          Grâce à notre large choix d'exercices, vous pouvez créer vos propres séances et les planifier selon vos besoins.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 580px;
  height: 580px;
  background: linear-gradient(116deg, #5BC0BE, #9EFFF0);
  border-radius: 50%;
  opacity: 0.2;
}
.card {
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
  border-radius: 16px;
}
</style>
