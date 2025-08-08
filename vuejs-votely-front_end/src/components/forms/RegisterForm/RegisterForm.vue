<script>
  import { useRegisterForm } from "@/composables/useAuth";
  import { useRouter } from "vue-router";

  export default {
    setup() {
      const router = useRouter();

      const { submit } = useRegisterForm();

      function handleSubmit(form$) {
        submit(form$).then(() => {
          setTimeout(() => {
            router.push("/login");
          }, 1500);
        });
      }

      return {
        handleSubmit,
      };
    },
  };
</script>
<template>
  <Vueform :display-errors="false" size="md" @submit="handleSubmit">
    <StaticElement tag="hr" />

    <GroupElement
      name="container"
      description="Make sure it matches your legal name"
    >
      <TextElement
        name="firstName"
        placeholder="First name"
        label="First name"
        :rules="['required', 'max:255']"
        :columns="{ container: 6, label: 12, wrapper: 12 }"
      />
      <TextElement
        name="lastName"
        placeholder="Last name"
        label="Last name"
        :rules="['required', 'max:255']"
        :columns="{ container: 6, label: 12, wrapper: 12 }"
      />
    </GroupElement>

    <PhoneElement
      name="phone"
      placeholder="Phone"
      label="Phone"
      :rules="['required']"
      :allow-incomplete="true"
      :unmask="true"
    />

    <TextElement
      name="email"
      input-type="email"
      placeholder="Email"
      label="Email"
      :rules="['required', 'max:255', 'email']"
      description="You will receive a confirmation letter to this email."
    />

    <TextElement
      name="password"
      input-type="password"
      placeholder="Password"
      label="Password"
      :rules="['required', 'min:8', 'same:confirmPassword']"
    />

    <TextElement
      name="confirmPassword"
      input-type="password"
      placeholder="Password again"
      label="Password confirmation"
      :rules="['required']"
    />

    <CheckboxElement
      name="terms"
      text="I accept the Terms & Conditions & Privacy Policy"
    />

    <CheckboxElement
      name="marketing_emails"
      text="I want to recieve marketing emails"
    />

    <StaticElement tag="hr" />

    <ButtonElement
      name="register"
      :submits="true"
      button-label="Create account"
      full
      size="lg"
    />
  </Vueform>
</template>
