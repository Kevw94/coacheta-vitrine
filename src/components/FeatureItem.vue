<template>
  <div class="feature-item p-4 rounded-lg shadow-lg bg-white bg-opacity-10">
    <img :src="image" alt="feature image" class="w-16 h-16 mb-4">
    <p class="text-lg text-gray-900 dark:text-gray-100">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: String,
  text: String,
});
</script>

<style scoped>
.feature-item {
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.10);
  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.30);
}
</style>
