<template>
  <div class="relative flex items-center justify-center h-auto md:h-screen bg-primary p-4 md:p-8">
    <div class="absolute w-40 h-40 md:w-[579px] md:h-[580px] rounded-full opacity-20" :style="circleStyle"></div>
    <div class="relative z-10 p-4 md:p-8 bg-white bg-opacity-10 rounded-lg shadow-lg">
      <img src="../assets/imgs/double_coachetaa.svg" alt="Mockup" class="w-full h-auto mx-auto">
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const circleStyle = computed(() => ({
  background: 'linear-gradient(116deg, #5BC0BE 7.51%, #9EFFF0 86.36%)',
}));
</script>

<style scoped>
.bg-primary {
  background-color: #23262E;
}
.shadow-lg {
  box-shadow: 0 8px 12px 6px rgba(0, 0, 0, 0.15), 0 4px 4px 0 rgba(0, 0, 0, 0.30);
}
</style>
