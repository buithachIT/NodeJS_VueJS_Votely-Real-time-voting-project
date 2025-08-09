<template>
  <div class="surface-0 shadow-2 w-full">
    <Menubar :model="items" class="flex justify-between px-4 py-2 space-x-10">
      <template #start>
        <RouterLink to="/" class="text-xl font-bold text-primary"
          >MyApp</RouterLink
        >
      </template>

      <template #end>
        <div class="flex gap-2 items-center">
          <Button label="Login" icon="pi pi-sign-in" text @click="goToLogin" />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  import { Button } from "primevue";

  const router = useRouter();

  const goToLogin = () => {
    router.push("/auth/login");
  };

  const items = ref([
    {
      label: "Home",
      icon: "pi pi-home",
      to: "/",
    },
    {
      label: "Dashboard",
      icon: "pi pi-chart-line",
      to: "/dashboard",
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      to: "/profile",
    },
  ]);
</script>
