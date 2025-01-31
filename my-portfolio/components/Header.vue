<template>
    <header class="bg-secondary text-white p-6">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-xl font-light uppercase">
          Jordan Carlile
        </div>
        <nav class="hidden md:block">
          <ul class="flex gap-x-4">
            <li v-for="item in headerLinks" :key="item.name">
              <a :href="item.link" class="transition hover:text-primary">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  const headerLinks = [
    { name: "Linkedin", link: "https://www.linkedin.com/in/yourprofile" },
    { name: "Github", link: "https://github.com/themikemoniker" },
    { name: "Resume", link: "/documents/JordanCarlileResumeJan2025.pdf" },
    { name: "Email Me", link: "mailto:jordancarlilepersonal@gmail.com?subject=Hey Jordan! I saw your portfolio and wanted to send you an email."}
  ];
  </script>