<!-- app.vue -->
<template>
  <div class="bg-neutral">
    <Header />
    <Hero />
    <slot />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
</script>