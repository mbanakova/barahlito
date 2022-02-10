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
      <ul v-else-if="hasCoaches" class="post-list">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :date="coach.date"
          :thumbnail="coach.thumbnail"
          :title="coach.title"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
          :description="coach.description"
        />
      </ul>
      <h3 v-else>No offers yet... Plz come back later</h3>

      <section class="side-filter">
        <base-card>
          <div class="controls">
            <base-button mode="bright" @click="loadCoaches(true)"
              >Refresh</base-button
            >
            <base-button
              mode="standard"
              v-if="!isCoach && !isLoading"
              link
              to="/register"
              >register</base-button
            >
          </div>
        </base-card>
        <coach-filter @change-filter="setFilters"></coach-filter>
      </section>
    </div>
  </div>
</template>

<script>
import CoachItem from "@/components/Coaches/CoachItem";
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import BaseBadge from "@/components/UI/BaseBadge";
import BaseSpinner from "@/components/UI/BaseSpinner";
import CoachFilter from "@/components/Coaches/CoachFilter.vue";
import BaseDialog from "@/components/UI/BaseDialog.vue";

export default {
  components: {
    CoachItem,
    BaseCard,
    BaseButton,
    BaseBadge,
    CoachFilter,
    BaseSpinner,
    BaseDialog,
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
    filteredCoaches() {
      const coaches = this.$store.getters["coaches/coaches"]; // namespacedName/gettersName
      return coaches.filter((coach) => {
        if (this.activeFilters.apparel && coach.areas.includes("apparel")) {
          return true;
        }
        if (this.activeFilters.home && coach.areas.includes("home")) {
          return true;
        }
        if (this.activeFilters.toys && coach.areas.includes("toys")) {
          return true;
        }
        if (this.activeFilters.sport && coach.areas.includes("sport")) {
          return true;
        }
        if (this.activeFilters.books && coach.areas.includes("books")) {
          return true;
        }
        if (this.activeFilters.kitchen && coach.areas.includes("kitchen")) {
          return true;
        }
        if (this.activeFilters.hobby && coach.areas.includes("hobby")) {
          return true;
        }
        if (this.activeFilters.auto && coach.areas.includes("auto")) {
          return true;
        }
        if (this.activeFilters.ussr && coach.areas.includes("ussr")) {
          return true;
        }
        if (this.activeFilters.plants && coach.areas.includes("plants")) {
          return true;
        }
        if (this.activeFilters.pets && coach.areas.includes("pets")) {
          return true;
        }
        if (this.activeFilters.leisure && coach.areas.includes("leisure")) {
          return true;
        }
        if (this.activeFilters.others && coach.areas.includes("others")) {
          return true;
        }
        return false;
      });
    },
    isCoach() {
      return this.$store.getters["coaches/isCoach"];
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters["coaches/coaches"];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch("coaches/loadCoaches", {
          forceRefresh: refresh,
        });
        console.log("list updated!");
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
