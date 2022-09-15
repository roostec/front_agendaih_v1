<template>
  <q-page class="flex flex-center bg-grey-1">
    <q-form @submit="onLogin">
      <q-card flat bordered style="width: 448px" class="q-pa-md">
        <q-card-section>
          <div class="text-h5 text-center">Recupera senha</div>
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
        </q-card-section>
        <q-card-section class="q-pt-none">
          <q-btn
            label="Enviar"
            color="primary"
            class="full-width q-py-md q-mb-md"
            no-caps
            unelevated
            type="submit"
          />

          <q-btn
            label="Cancelar"
            color="primary"
            outline
            class="full-width q-py-md"
            no-caps
            unelevated
            to="signin"
          />
        </q-card-section>
      </q-card>
    </q-form>
  </q-page>
</template>

<script>
import accountMixin from "../mixins/accountMixin";
export default {
  name: "ForgotPasswordPage",
  mixins: [accountMixin],
  data() {
    return {
      form: {
        email: "rflaraujodev@gmail.com",
      },
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
