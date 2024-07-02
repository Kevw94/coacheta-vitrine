<template>
  <div class="feature-screen flex flex-col items-center md:flex-row gap-8 p-8">
    <div class="relative flex-1">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="circle"></div>
      </div>
      <img :src="image" alt="Feature image" class="relative z-10 mx-auto">
    </div>
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
.feature-screen {
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.30);
  border-radius: 16px;
}

.circle {
  width: 579px;
  height: 580px;
  background: #5BC0BE;
  opacity: 0.2;
  border-radius: 50%;
}
</style>
