<script setup lang="ts">

</script>

<template>
	<div class="flex flex-col gap-8 items-center">
		<div class="w-full">
			<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-black md:text-5xl lg:text-6xl"><span
					class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Coacheta</span>
				Your Fitness Assistant</h1>
		</div>
		<div class="mt-4 flex w-full">
			<div class="flex-[1_1_100%]">
				<img src="../assets/imgs/Creation_de_seance.png" />
			</div>
			<div class="card flex-[1_1_100%]">
				<div class="text-3xl font-extrabold text-gray-900">Ecran d'accueil</div>
				<div class="flex flex-col items-start gap-4 ">
					<div class="text-l break-words text-left">- Accéder à la page Mes séances et Programmes </div>
					<div class="text-l break-words text-left">- Accéder à la page de suivi de progression : statistiques </div>
					<div class="text-l break-words text-left">- Affichage du calendrier à la date du jour : ainsi que la séance ou évent prévu ce jour </div>
					<div class="text-l break-words text-left">- Possibilité d’ajouter une séance déjà existante  à une date </div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
