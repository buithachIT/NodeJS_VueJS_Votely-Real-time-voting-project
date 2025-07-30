import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes/index.js";

import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Aura from "@primeuix/themes/aura";

import "primeicons/primeicons.css";
import "./style/fonts.css";
import "./style/index.css";

const app = createApp(App);

app.use(ToastService);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.component("InputText", InputText);
app.component("PasswordInput", Password);
app.component("PrimaryButton", Button);
app.component("ToastMessage", Toast);

app.mount("#app");
