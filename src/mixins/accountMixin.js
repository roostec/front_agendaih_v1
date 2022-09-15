export default {
  methods: {
    async logIn() {
      try {
        const { data, status } = await this.$http.post(
          "auth/authentication",
          this.form
        );
        if (status === 200 || status === 201) {
          console.log(data);
          this.$router.push({ name: "Main" });
        }
      } catch (err) {
        console.log(err);
      }
    },
    async onForgotPassword() {
      this.loadingForgotPassword = true;
      try {
        const { data, status } = await this.$http.post(
          "auth/forgotpassword",
          this.form
        );
        if (status === 200 || status === 201) {
          console.log(data);
          this.$router.push({ name: "Main" });
        }
      } catch (err) {
        console.log(err);
      } finally {
        setTimeout(() => {
          this.loadingForgotPassword = false;
        }, 2000);
      }
    },
  },
};
