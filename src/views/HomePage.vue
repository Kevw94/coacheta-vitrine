<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center gap-8 p-8">
    <div class="w-full text-center mb-32">
      <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Coacheta</span>
        Your Fitness Assistant
      </h1>
    </div>
    <div class="mt-8 flex w-full items-center justify-center">
      <div class="card flex items-center p-8 rounded-lg shadow-lg">
        <div class="relative flex-1 max-w-lg flex justify-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="circle"></div>
          </div>
          <img src="../assets/imgs/double_coacheta.svg" alt="Coacheta" class="relative z-10 mx-auto ">
        </div>
        <div class="text-container flex-1 ml-8">
          <p class="text-base text-0B132B">
            Coacheta, l'application mobile qui révolutionne votre expérience en matière de musculation <br/> et de suivi de vos performances physiques.<br/>
            Avec Coacheta, vous pouvez planifier et suivre vos séances de musculation en les partageant avec vos amis.<br/> Atteignez vos objectifs de force et de forme physique ensemble grâce à un outil complet et personnalisé.<br/>
            Grâce à notre large choix d'exercices, vous pouvez créer vos propres séances et les planifier selon vos besoins.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width:550px;
  height: 550px;
  background: linear-gradient(116deg, #5BC0BE, #9EFFF0);
  border-radius: 50%;
  opacity: 0.8;
  overflow: visible;
}
.card {
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
  border-radius: 16px;
  display: flex;
  align-items: center;
  padding: 20px;
  width: 80%;
}


</style>
