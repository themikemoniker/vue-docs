<!-- app.vue -->
<template>
  <div class="bg-neutral">
    <Header />
    <Hero />
    <AboutMe />
    <curved-divider />
    <section id="showcase" class="py-16 bg-slate-200">
      <h2 class="text-primary text-3xl mb-8 text-center">
        My Work
      </h2>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <project-showcase
          v-for="project in projects"
          :key="project.name"
          :project="project"
          />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: "Bigquery News Map",
    description: "Mapbox map populated by news articles stored and queried with Google BigQuery big data solution.",
    image: "/images/FIU-screenshot.png"
  },
  {
    name: "Bigquery News Map",
    description: "Mapbox map populated by news articles stored and queried with Google BigQuery big data solution.",
    image: "/images/FIU-screenshot.png"
  },
  {
    name: "Bigquery News Map",
    description: "Mapbox map populated by news articles stored and queried with Google BigQuery big data solution.",
    image: "/images/FIU-screenshot.png"
  }
]
</script>