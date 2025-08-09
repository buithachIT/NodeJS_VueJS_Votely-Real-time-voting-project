<template>
  <Navbar />
  <main class="p-4">
    <RouterView />
  </main>
</template>

<script setup>
  import Navbar from "@/components/navbar/defaultHeader.vue";
</script>
