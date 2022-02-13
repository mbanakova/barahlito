<template>
  <div class="wrapper">
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
    <ul v-else-if="hasOffers" class="post-list">
      <OfferItem
        v-for="offer in filteredOffers"
        :key="offer.id"
        :id="offer.id"
        :date="offer.date"
        :thumbnail="offer.thumbnail"
        :title="offer.title"
        :rate="offer.hourlyRate"
        :areas="offer.areas"
        :description="offer.description"
      />
    </ul>
    <h3 v-else>No offers yet... Plz come back later</h3>
  </div>
</template>

<script>
import OfferItem from "@/components/Offers/OfferItem";
export default {
  components: {
    OfferItem,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    filteredOffers() {
      const offers = this.$store.getters["offers/offers"]; // namespacedName/gettersName
      return offers.filter(
        (offer) => offer.user === this.$store.getters.userId
      );
    },
    hasOffers() {
      return !this.isLoading && this.$store.getters["offers/offers"];
    },
  },
  created() {
    this.loadOffers();
  },
  methods: {
    async loadOffers(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("offers/loadOffers", {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.post-list {
  margin: 0 auto;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  padding: 0;
}

@media (max-width: 1023px) {
  .post-list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 767px) {
  .post-list {
    grid-template-columns: 2fr;
    grid-gap: 20px;
  }
}
</style>
