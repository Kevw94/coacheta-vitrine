<script setup lang="ts">
import FeatureItem from '../components/FeatureItem.vue';
import Mockup from '../components/Mockup.vue';
import FeatureScreen from '../components/FeatureScreen.vue';
</script>

<template>
  <div class="flex flex-col items-center gap-8 p-4 md:p-8">
    <div class="w-full text-center">
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-gradient text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Features</span>
      </h1>
      <p class="mt-4 text-lg text-gray-700 dark:text-gray-200">
        Découvrez les fonctionnalités principales de Coacheta.
      </p>
    </div>
    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      <FeatureItem image="coacheta.svg" text="Planifiez vos séances de musculation." />
      <FeatureItem image="coacheta.svg" text="Suivez vos performances physiques." />
      <FeatureItem image="coacheta.svg" text="Partagez vos progrès avec vos amis." />
    </div>
    <Mockup />
  </div>

  <div class="features w-full">
    <div class="mt-4 flex flex-col gap-8">
      <FeatureScreen
          image="accueil.svg"
          title="Accueil"
          description="Accès à la page Mes séances et programmes, page de suivi de progression, affichage du calendrier à la date du jour, possibilité d’ajouter une séance."
      />
      <FeatureScreen
          image="seances_programmes.svg"
          title="Mes séances & programmes"
          description="La liste des séances et programmes existants, possibilité de création de nouvelles séances et de nouveaux programmes."
      />
      <FeatureScreen
          image="ecran_chat.svg"
          title="Ecran chat"
          description="Discussion avec l’ami sélectionné depuis l’écran profil, ajout de séances ou programmes."
      />
      <FeatureScreen
          image="ecran_seance.svg"
          title="Ecran de séance"
          description="Définir par exercice ses objectifs, instructions et guide d’entraînement pour chaque exercice."
      />
      <FeatureScreen
          image="creation_programme.svg"
          title="Ecran Création de programme"
          description="Création d’un programme à partir des séances déjà créées. Assigner les séances à des jours de la semaine."
      />
      <FeatureScreen
          image="mes_statistiques.svg"
          title="Mes statistiques"
          description="Voir par exercice si les objectifs sont atteints, représentation graphique de la progression."
      />
      <FeatureScreen
          image="ecran_seance_en_cours.svg"
          title="Ecran de séance en cours"
          description="Voir par exercice la série en cours, chronomètre pour contrôler le temps de repos, possibilité de passer l’exercice ou terminer la séance."
      />
      <FeatureScreen
          image="selection_exercices.svg"
          title="Sélection des exercices"
          description="Accès à une liste d’exercices pour sélectionner pour sa séance."
      />
      <FeatureScreen
          image="fin_seance.svg"
          title="Ecran de fin de séance"
          description="Voir par exercice si les objectifs sont atteints, progression ou régression."
      />
    </div>
  </div>
</template>

<style scoped>
.text-gradient {
  background-image: linear-gradient(to right, #5BC0BE, #9EFFF0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
