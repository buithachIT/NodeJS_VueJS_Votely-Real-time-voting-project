<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h2 class="text-xl font-bold mb-4 font-roboto">Đăng ký tài khoản</h2>

      <form @submit.prevent="onSubmit" class="space-y-4">
        <div class="space-y-2">
          <label for="email" class="block font-medium">Email</label>
          <InputText
            v-model="form.email"
            class="w-full"
            placeholder="Nhập email của bạn"
            @blur="validateField('email')"
          />
          <small v-if="errors.email" class="text-red-500">{{
            errors.email
          }}</small>
        </div>

        <div class="space-y-2">
          <label for="password" class="block font-medium">Mật khẩu</label>
          <PasswordInput
            v-model="form.password"
            toggleMask
            feedback
            class="w-full"
            placeholder="Nhập mật khẩu"
            @blur="validateField('password')"
          />
          <small v-if="errors.password" class="text-red-500">{{
            errors.password
          }}</small>
        </div>

        <div class="space-y-2">
          <label for="confirmPassword" class="block font-medium"
            >Xác nhận mật khẩu</label
          >
          <PasswordInput
            v-model="form.confirmPassword"
            toggleMask
            class="w-full"
            placeholder="Nhập lại mật khẩu"
            @blur="validateField('confirmPassword')"
          />
          <small v-if="errors.confirmPassword" class="text-red-500">{{
            errors.confirmPassword
          }}</small>
        </div>

        <PrimaryButton
          label="Đăng ký"
          type="submit"
          class="w-full"
          :loading="isLoading.submitting"
          :disabled="!isFormValid || isLoading.submitting"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
  import useRegisterForm from "@/composables/useRegisterForm";

  const { form, errors, isLoading, isFormValid, validateField, onSubmit } =
    useRegisterForm();
</script>
