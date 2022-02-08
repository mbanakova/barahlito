<template>
  <base-card class="wrapper">
    <h2>Add an offer</h2>
    <!-- /эмит который вызывает метод -->
    <CoachForm @save-data="saveData" />
  </base-card>
</template>

<script>
import CoachForm from "@/components/Coaches/CoachForm.vue";
import BaseCard from "@/components/UI/BaseCard.vue";
export default {
  components: { CoachForm, BaseCard },
  methods: {
    saveData(data) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
};
</script>

<style></style>
