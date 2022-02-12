<template>
  <div>
    <base-dialog
      :show="!!error"
      title="Данные не подгрузились"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <div class="list-page">
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

      <section class="side-filter">
        <base-card>
          <div class="controls">
            <button
              class="base-button base-button--bright"
              @click="loadOffers(true)"
            >
              Refresh
            </button>
            <!-- <nuxt-link
              to="/auth?redirect=register"
              class="base-button"
              v-if="!isLoggedIn"
              >Login to add an offer</nuxt-link
            > -->

            <!-- <base-button
              mode="standard"
              v-if="isLoggedIn && !isOffer && !isLoading"
              link
              to="/register"
              >register</base-button
            > -->

            <!-- trying to delete !isOffer for multiple offers per ID option -->
            <base-button
              mode="standard"
              v-if="isLoggedIn && !isLoading"
              link
              to="/register"
              >Add new offer</base-button
            >
          </div>
        </base-card>
        <offer-filter @change-filter="setFilters"></offer-filter>
      </section>
    </div>
  </div>
</template>

<script>
import OfferItem from "@/components/Offers/OfferItem";
import OfferFilter from "@/components/Offers/OfferFilter.vue";

export default {
  components: {
    OfferItem,
    OfferFilter,
  },
  data() {
    return {
      isLoading: false,
      error: null,
      activeFilters: {
        apparel: true,
        home: true,
        toys: true,
        sport: true,
        books: true,
        kitchen: true,
        hobby: true,
        auto: true,
        ussr: true,
        plants: true,
        pets: true,
        leisure: true,
        others: true,
      },
    };
  },
  computed: {
    isLoggedIn() {
      // module Auth is not namespaced, so we can access like this
      return this.$store.getters.isAuthenticated;
    },
    filteredOffers() {
      const offers = this.$store.getters["offers/offers"]; // namespacedName/gettersName
      return offers.filter((offer) => {
        if (this.activeFilters.apparel && offer.areas.includes("apparel")) {
          return true;
        }
        if (this.activeFilters.home && offer.areas.includes("home")) {
          return true;
        }
        if (this.activeFilters.toys && offer.areas.includes("toys")) {
          return true;
        }
        if (this.activeFilters.sport && offer.areas.includes("sport")) {
          return true;
        }
        if (this.activeFilters.books && offer.areas.includes("books")) {
          return true;
        }
        if (this.activeFilters.kitchen && offer.areas.includes("kitchen")) {
          return true;
        }
        if (this.activeFilters.hobby && offer.areas.includes("hobby")) {
          return true;
        }
        if (this.activeFilters.auto && offer.areas.includes("auto")) {
          return true;
        }
        if (this.activeFilters.ussr && offer.areas.includes("ussr")) {
          return true;
        }
        if (this.activeFilters.plants && offer.areas.includes("plants")) {
          return true;
        }
        if (this.activeFilters.pets && offer.areas.includes("pets")) {
          return true;
        }
        if (this.activeFilters.leisure && offer.areas.includes("leisure")) {
          return true;
        }
        if (this.activeFilters.others && offer.areas.includes("others")) {
          return true;
        }
        return false;
      });
    },
    // isOffer() {
    //   return this.$store.getters["offers/isOffer"];
    // },
    hasOffers() {
      return !this.isLoading && this.$store.getters["offers/offers"];
    },
  },
  created() {
    this.loadOffers();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
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
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
.list-page {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 50px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px 20px;
}
.post-list {
  margin: 0 auto;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  padding: 0;
}

@media (max-width: 1023px) {
  .post-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 767px) {
  .post-list {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
}
</style>
