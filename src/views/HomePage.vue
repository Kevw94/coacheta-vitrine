<template>
  <div class="flex flex-col items-center gap-8 p-4 md:p-8">
    <div class="w-full text-center mb-16 md:mb-32">
      <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-gradient">Coacheta</span>
        Your Fitness Assistant
      </h1>
    </div>
    <div class="mt-8 flex flex-col md:flex-row w-full items-center justify-center">
      <div class="card flex flex-col md:flex-row items-center p-4 md:p-8 rounded-lg shadow-lg">
        <div class="relative flex-1 max-w-xs md:max-w-lg flex justify-center mb-4 md:mb-0">
          <div class="absolute inset-0 flex items-center justify-center">
            <div class="circle"></div>
          </div>
          <img src="../assets/imgs/double_coachetaa.svg" alt="Coacheta" class="relative z-10 mx-auto w-full h-auto">
        </div>
        <div class="text-container flex-1 ml-0 md:ml-8">
          <p class="text-base font-semibold text-0B132B text-center md:text-justify">
            <span class="text-gradient">Coacheta</span>, l'application mobile qui révolutionne votre expérience <br/> en matière de musculation et de suivi de vos performances physiques.<br/><br/>
            Avec <span class="text-gradient">Coacheta</span>, vous pouvez planifier et suivre vos séances de musculation en les partageant avec vos amis.<br/><br/>  Atteignez vos objectifs de force et de forme physique ensemble grâce à un outil complet et personnalisé.<br/>
            <br/> Grâce à notre large choix d'exercices, vous pouvez créer vos propres séances et les planifier selon vos besoins.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.circle {
  width: 250px;
  height: 250px;
  background: linear-gradient(116deg, #5BC0BE, #9EFFF0);
  border-radius: 50%;
  opacity: 0.8;
}
@media (min-width: 768px) {
  .circle {
    width: 400px;
    height: 400px;
  }
}
@media (min-width: 1024px) {
  .circle {
    width: 550px;
    height: 550px;
  }
}
.card {
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
  border-radius: 16px;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}
@media (min-width: 768px) {
  .card {
    padding: 20px;
  }
}
.text-gradient {
  background-image: linear-gradient(to right, #5BC0BE, #9EFFF0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
