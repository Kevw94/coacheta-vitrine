<script setup lang="ts">
</script>

<template>
  <div class="p-8">
    <div class="w-full text-center mb-16">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-gradient text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About Coacheta</span>
      </h1>
    </div>
    <div class="card p-10 rounded-lg shadow-lg mx-auto max-w-3xl mb-16">
      <p class="text-lg text-justify text-white">
        <span class="text-gradient font-semibold">Coacheta</span> est née de la vision de Guilhem, un passionné de sport déterminé à rendre les séances d'entraînement plus personnalisables et autonomes pour chaque utilisateur.<br/><br/>
        Avec <span class="text-gradient font-semibold">Coacheta</span>, non seulement vous pouvez planifier et suivre vos séances de musculation, mais vous pouvez aussi intégrer un aspect social en vous défiant et en vous entraînant avec vos amis.<br/><br/>
        Atteignez vos objectifs de force et de forme physique ensemble grâce à un outil complet et sur mesure.<br/><br/>
        Que vous souhaitiez organiser des séances collectives ou simplement suivre vos progrès, <span class="text-gradient font-semibold">Coacheta</span> est votre compagnon idéal pour une expérience sportive enrichissante.
      </p>
    </div>

    <div class="mt-16 flex flex-wrap justify-center gap-12">
      <div class="relative">
        <div class="circle"></div>
        <img src="../assets/imgs/guilhem.svg" alt="Photo 1" class="photo">
      </div>
      <div class="relative">
        <div class="circle"></div>
        <img src="../assets/imgs/kevin.svg" alt="Photo 2" class="photo">
      </div>
      <div class="relative">
        <div class="circle"></div>
        <img src="../assets/imgs/mohamed.svg" alt="Photo 3" class="photo">
      </div>
      <div class="relative">
        <div class="circle"></div>
        <img src="../assets/imgs/stephanie.svg" alt="Photo 4" class="photo">
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-gradient {
  background-image: linear-gradient(to right, #5BC0BE, #9EFFF0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  background-size: 200% auto;
  background-position: 0 0;
}

.card {
  background: #727D7B;
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
  border-radius: 16px;
  padding: 20px;
  color: white;
}

.circle {
  width: 200px;
  height: 200px;
  background: linear-gradient(116deg, #5BC0BE, #9EFFF0);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}

.photo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  z-index: 10;
}

.mb-16 {
  margin-bottom: 4rem;
}

.mt-16 {
  margin-top: 4rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .circle {
    width: 150px;
    height: 150px;
  }
  .photo {
    width: 130px;
    height: 130px;
  }
}

@media (max-width: 480px) {
  .circle {
    width: 100px;
    height: 100px;
  }
  .photo {
    width: 80px;
    height: 80px;
  }
}
</style>
