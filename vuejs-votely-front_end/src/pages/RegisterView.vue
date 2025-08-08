<template>
  <section class="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
    <h2 class="text-xl font-bold mb-4">Create an account to join us</h2>
    <RegisterForm @submit="submit" />
  </section>
</template>

<script setup>
  import RegisterForm from "@/components/forms/RegisterForm/RegisterForm.vue";
</script>
