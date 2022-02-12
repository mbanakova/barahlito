<template>
  <div>
    <base-dialog :show="!!error" title="An Error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <base-dialog :show="isLoading" title="Authenticating" fixed>
      <base-spinner></base-spinner>
    </base-dialog>
    <div class="wrapper">
      <base-card>
        <form @submit.prevent="onSubmit">
          <div class="form-control">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model.trim="email" />
          </div>
          <div class="form-control">
            <label for="password">Password</label>
            <input type="password" id="password" v-model.trim="password" />
          </div>
          <p v-if="!formIsValid">Минимальная длина пароля — 6 символов</p>
          <button type="submit" class="base-button base-button--bright">
            {{ isLogin ? "Вход" : "Регистрация" }}
          </button>
          <button type="button" class="toggle-link" @click="isLogin = !isLogin">
            {{ isLogin ? "Зарегистрироваться" : "Войти с паролем" }}
          </button>
        </form>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      isLogin: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    onSubmit() {
      this.formIsValid = true;
      this.$store
        .dispatch("authenticateUser", {
          isLogin: this.isLogin,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.replace("/offers");
        })
        .catch((e) => {
          this.formIsValid = false;
          this.error = new Error(e);
        });
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
  resize: vertical;
}

input:focus,
textarea:focus {
  border-color: #275a81;
  background-color: #ebf6ff;
  outline: none;
}

.toggle-link {
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 500;
  padding: 0.15rem;
  font-size: 16px;
  margin-left: 30px;
}
</style>
