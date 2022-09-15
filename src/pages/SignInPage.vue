<template>
  <q-page class="flex flex-center bg-grey-1">
    <q-form @submit="onLogin">
      <q-card flat bordered style="width: 448px" class="q-pa-md">
        <q-card-section>
          <div class="text-h5 text-center">{{ appTitle }}</div>
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
          <div class="row justify-between" style="margin-top: -12px">
            <q-space />
            <a
              class="text-weight-medium text-primary"
              href="/forgoutpassword"
              style="text-decoration: none"
            >
              Esqueceu a senha?
            </a>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn
            label="Login"
            color="primary"
            class="full-width q-py-md q-mb-md"
            no-caps
            unelevated
            type="submit"
          />
          <q-btn
            label="Criar conta"
            color="primary"
            outline
            class="full-width q-py-md"
            no-caps
            unelevated
            to="/signup"
          />
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import accountMixin from "../mixins/accountMixin";
export default {
  name: "SignInPage",
  mixins: [accountMixin],
  data() {
    return {
      form: {
        email: "rflaraujodev@gmail.com",
        password: "123456",
      },
      showPassword: false,
    };
  },
  methods: {
    async onLogin() {
      this.logIn();
    },
  },
};
</script>

<style></style>
