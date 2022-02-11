<template>
  <div class="wrapper">
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="email">E-mail</label>
          <input type="email" id="email" v-model.trim="email" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" v-model.trim="password" />
        </div>
        <p v-if="!formIsValid">Min password.length === 6 signs!</p>
        <!-- <base-button mode="bright">{{ submitButtonCaption }}</base-button>
        <base-button type="button" mode="standard" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button> -->
        <button
          type="button"
          class="base-button base-button--bright"
          @click="switchAuthMode"
        >
          {{ submitButtonCaption }}
        </button>
        <button type="button" class="base-button" @click="switchAuthMode">
          {{ switchModeButtonCaption }}
        </button>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard.vue";
import BaseButton from "@/components/UI/BaseButton.vue";

export default {
  components: { BaseButton, BaseCard },
  data() {
    return {
      email: "",
      password: "",
      formIsValid: true,
      mode: "login",
    };
  },
  computed: {
    submitButtonCaption() {
      if (this.mode === "login") {
        return "Войти";
      } else {
        return "Регистрация";
      }
    },
    switchModeButtonCaption() {
      if (this.mode === "login") {
        return "Или зарегистрироваться";
      } else {
        return "Или войти";
      }
    },
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.password.length < 6
      )
        this.formIsValid = false;
      return;
    },
    switchAuthMode() {
      if (this.mode === "login") {
        this.mode = "signup";
      } else {
        this.mode = "login";
      }
      console.log(this.mode);
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
</style>
