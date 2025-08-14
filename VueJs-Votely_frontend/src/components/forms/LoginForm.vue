<script>
import { useRouter } from 'vue-router'
import { useLoginForm } from '@/composables/useAuth'
import { ROUTES } from '@/constants/routes'

export default {
  setup() {
    const router = useRouter()
    const { submit } = useLoginForm()

    const handleSubmit = (form$) => {
      return submit(form$).then(() => {
        router.push('/dashboard')
      })
    }

    return { handleSubmit, ROUTES }
  },
}
</script>

<template>
  <Vueform class="p-5" :display-errors="false" size="md" @submit="handleSubmit">
    <StaticElement tag="h1" content="Sign in" />
    <StaticElement tag="hr" />

    <TextElement
      name="email"
      label="Email"
      placeholder="Enter your email"
      input-type="email"
      :rules="['required', 'email', 'max:255']"
      description="Use the email you registered with."
    />

    <TextElement
      name="password"
      label="Password"
      placeholder="Enter your password"
      input-type="password"
      :rules="['required', 'min:6']"
    />

    <GroupElement name="login_opts" class="flex w-full justify-between items-center">
      <CheckboxElement name="remember" text="Remember me" />
      <RouterLink :to="ROUTES.FORGOT_PASSWORD_PAGE" class="text-blue-600">
        Forgot password?
      </RouterLink>
    </GroupElement>

    <StaticElement tag="hr" />

    <ButtonElement name="login" :submits="true" button-label="Sign in" full size="lg" />
  </Vueform>
  <p class="w-full">
    Don't have an account?
    <RouterLink class="text-blue-600 font-bold underline" :to="ROUTES.REGISTER_PAGE">
      Create one
    </RouterLink>
  </p>
</template>
