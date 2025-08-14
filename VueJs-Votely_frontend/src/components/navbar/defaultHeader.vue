<template>
  <div class="bg-white shadow-md w-full">
    <PrimeMenubar :model="items" class="flex justify-between px-4 py-2 space-x-10">
      <template #start>
        <RouterLink to="/" class="text-xl font-bold text-blue-600">MyApp</RouterLink>
      </template>

      <template #end>
        <div class="flex gap-2 items-center">
          <PrimaryButton label="Login" icon="pi pi-sign-in" text @click="goToLogin" />
        </div>
      </template>
    </PrimeMenubar>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const goToLogin = () => {
  router.push('/auth/login')
}

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    to: '/',
  },
  {
    label: 'Dashboard',
    icon: 'pi pi-chart-line',
    to: '/dashboard',
  },
  {
    label: 'Profile',
    icon: 'pi pi-user',
    to: '/profile',
  },
])
</script>
