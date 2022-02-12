<template>
  <OfferRegistration />
</template>

<script>
import OfferRegistration from "@/components/Offers/OfferRegistration.vue";
export default {
  middleware: ["check-auth", "auth"],
  components: { OfferRegistration },
};
</script>

<style></style>
