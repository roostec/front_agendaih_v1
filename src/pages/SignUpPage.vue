<template>
  <q-page class="flex flex-center bg-grey-1">
    <q-form @submit="onLogin">
      <q-card flat bordered style="width: 448px" class="q-pa-md">
        <q-card-section>
          <div class="text-h5 text-center">Criar conta</div>
        </q-card-section>
        <q-card-section class="q-gutter-sm">
          <q-select
            outlined
            v-model="form.secretary"
            :options="secretaries"
            label="Secretaria"
            :rules="[isRequired]"
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="mdi-domain" class="cursor-pointer" />
            </template>
          </q-select>
          <q-input
            outlined
            v-model="form.name"
            label="Nome"
            type="text"
            :rules="[isRequired]"
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="mdi-account-outline" class="cursor-pointer" />
            </template>
          </q-input>
          <q-input
            outlined
            autocomplete="false"
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
            autocomplete="false"
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
        <q-card-section class="q-pt-none">
          <q-btn
            label="Criar conta"
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
  name: "SignUpPage",
  mixins: [accountMixin],
  data() {
    return {
      form: {
        secretary: "",
        name: "",
        email: "",
        password: "",
      },
      showPassword: false,
      secretaries: [
        { label: "Secretaria de Saúde", value: "secretary_health" },
        { label: "Secretaria de Educação", value: "secretary_education" },
        { label: "Secretaria de Cultura", value: "secretary_culture" },
        { label: "Secretaria de Esporte", value: "secretary_sport" },
        { label: "Secretaria de Turismo", value: "secretary_tourism" },
        {
          label: "Secretaria de Desenvolvimento Econômico",
          value: "secretary_economic",
        },
        {
          label: "Secretaria de Desenvolvimento Social",
          value: "secretary_social",
        },
        {
          label: "Secretaria de Desenvolvimento Urbano",
          value: "secretary_urban",
        },
        {
          label: "Secretaria de Meio Ambiente",
          value: "secretary_environment",
        },
        { label: "Secretaria de Agricultura", value: "secretary_agriculture" },
        {
          label: "Secretaria de Administração",
          value: "secretary_administration",
        },
        { label: "Secretaria de Finanças", value: "secretary_finance" },
        { label: "Secretaria de Planejamento", value: "secretary_planning" },
        { label: "Secretaria de Transporte", value: "secretary_transport" },
        { label: "Secretaria de Obras", value: "secretary_works" },
        {
          label: "Secretaria de Comunicação",
          value: "secretary_communication",
        },
        {
          label: "Secretaria de Tecnologia da Informação",
          value: "secretary_information_technology",
        },
        {
          label: "Secretaria de Segurança Pública",
          value: "secretary_public_security",
        },
        {
          label: "Secretaria de Defesa Civil",
          value: "secretary_civil_defense",
        },
        { label: "Secretaria de Trânsito", value: "secretary_traffic" },
        {
          label: "Secretaria de Desenvolvimento Rural",
          value: "secretary_rural",
        },
        {
          label: "Secretaria de Desenvolvimento Industrial",
          value: "secretary_industrial",
        },
        {
          label: "Secretaria de Desenvolvimento Agrário",
          value: "secretary_agrarian",
        },
      ],
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
