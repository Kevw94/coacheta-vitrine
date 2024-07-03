<template>
  <div class="feature-screen flex flex-col items-center md:flex-row gap-4 p-4 md:p-8">
    <div class="relative flex-1">
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="circle"></div>
      </div>
      <img :src="getUrl(image)" alt="Feature image" class="relative z-10 mx-auto w-2/3 md:w-1/2 lg:w-1/3 h-auto">
    </div>
    <div class="flex-1 text-center md:text-left mt-4 md:mt-0">
      <h3 class="text-gradient mb-4 text-2xl font-extrabold text-gray-900 dark:text-white">{{ title }}</h3>
      <p class="text-lg text-gray-700 dark:text-gray-200">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUrl } from "../shared/utils.ts";

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
  width: 200px;
  height: 200px;
  background: #5BC0BE;
  opacity: 0.2;
  border-radius: 50%;
}

@media (min-width: 768px) {
  .circle {
    width: 300px;
    height: 300px;
  }
}

@media (min-width: 1024px) {
  .circle {
    width: 400px;
    height: 400px;
  }
}

.text-gradient {
  background-image: linear-gradient(to right, #5BC0BE, #9EFFF0);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
