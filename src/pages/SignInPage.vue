<template>
  <q-page class="flex flex-center">
    <particles-bg type="codweb" :bg="true" class="absolute" num="50" color="#027be3" />
    <q-card flat bordered style="width: 448px" class="q-pa-md">
      <q-card-section>
        <div class="text-h5 text-center">Login</div>
      </q-card-section>
      <q-card-section class="q-gutter-sm">
        <q-input
          outlined
          v-model="form.email"
          label="Email"
          type="email"
          :rules="[isRequired, isEmail]"
          lazy-rules
        >
          <template v-slot:prepend>
            <q-icon name="mdi-email-outline" class="cursor-pointer" />
          </template>
        </q-input>
        <q-input
          outlined
          v-model="form.password"
          lazy-rules
          :rules="[isRequired]"
          label="Senha"
          :type="showPassword ? 'text' : 'password'"
        >
          <template v-slot:prepend>
            <q-icon name="mdi-form-textbox-password" class="cursor-pointer" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
              class="cursor-pointer"
              @click="showPassword = !showPassword"
            />
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <q-btn
          label="Login"
          color="primary"
          class="full-width q-py-md"
          no-caps
          unelevated
          @click="login"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: "SignInPage",
  components: {
    ParticlesBg,
  },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      showPassword: false,
    };
  },
};
</script>

<style></style>
