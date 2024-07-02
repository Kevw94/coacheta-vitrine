<template>
  <div class="feature-card flex flex-col md:flex-row items-center justify-between gap-8 p-8 bg-gray-light rounded-lg shadow-lg">
    <img :src="image" alt="Feature image" class="w-full md:w-1/2 h-auto mx-auto" />
    <div class="flex-1 text-center md:text-left">
      <h3 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">{{ title }}</h3>
      <p class="text-lg text-gray-700 dark:text-gray-200">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  title: string;
  description: string;
}>();
</script>

<style scoped>
.feature-card {
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
  border-radius: 16px;
}
</style>
