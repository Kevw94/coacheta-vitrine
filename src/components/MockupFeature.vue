<script setup lang="ts">
defineProps({
  imageSrc: String,
  points: Array
})
</script>

<template>
  <div class="flex flex-col items-center p-8">
    <img :src="imageSrc" alt="Mockup Image" class="w-1/3 mb-8" />
    <div class="flex flex-wrap justify-center gap-4">
      <div v-for="(point, index) in points" :key="index" class="bg-gray-200 text-gray-700 p-4 rounded-lg w-1/3">
        {{ point }}
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
