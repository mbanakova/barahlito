<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control">
        <label for="email">your email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="message">your message</label>
        <textarea id="message" rows="3" v-model.trim="message" />
      </div>
      <p v-if="!formIsValid" class="errors">
        Please, fill in the form correctly
      </p>
      <div class="actions">
        <base-button mode="bright">Send a message</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "@/components/UI/BaseButton.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
export default {
  components: { BaseButton, BaseCard },
  data() {
    return {
      email: "",
      message: "",
      formIsValid: true,
    };
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (!this.email || !this.email.includes("@") || this.message === "") {
        this.formIsValid = false;
        return;
      }
      // при отправке формы action 'contactCoach' добавляет в state.requests объект с собранными данными
      this.$store.dispatch("requests/contactCoach", {
        coachId: this.$route.params.id,
        userEmail: this.email,
        message: this.message,
      });
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

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

.errors {
  font-weight: bold;
  color: #f74d4d;
}

.actions {
  text-align: center;
}
</style>
