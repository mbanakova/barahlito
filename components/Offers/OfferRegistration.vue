<template>
  <base-card class="wrapper">
    <h2>Add an offer</h2>
    <!-- /эмит который вызывает метод -->
    <OfferForm @save-data="saveData" />
  </base-card>
</template>

<script>
import OfferForm from "@/components/Offers/OfferForm.vue";
export default {
  components: { OfferForm },
  methods: {
    saveData(data) {
      this.$store.dispatch("offers/registerOffer", data);
      this.$router.replace("/offers");
    },
  },
};
</script>

<style></style>
