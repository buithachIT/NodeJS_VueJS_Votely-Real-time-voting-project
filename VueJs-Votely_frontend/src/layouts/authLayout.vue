<script setup>
import Navbar from '@/components/navbar/defaultHeader.vue'
</script>
<template>
  <div class="auth-layout">
    <div class="w-full"><Navbar /></div>
    <div class="auth-container mt-10 mx-auto p-6">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f8f9fa;
}
.auth-container {
  width: 100%;
  max-width: 400px;
  margin: 2.5rem auto 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}
</style>
