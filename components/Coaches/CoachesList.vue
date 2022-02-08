<template>
  <div class="list-page">
    <ul v-if="hasCoaches" class="post-list">
      <CoachItem
        v-for="coach in filteredCoaches"
        :key="coach.id"
        :id="coach.id"
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
          <base-button mode="bright">refresh</base-button>
          <base-button mode="standard" v-if="!isCoach" link to="/register"
            >register</base-button
          >
        </div>
      </base-card>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
  </div>
</template>

<script>
import CoachItem from "@/components/Coaches/CoachItem";
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import BaseBadge from "@/components/UI/BaseBadge";
import CoachFilter from "@/components/Coaches/CoachFilter.vue";

export default {
  components: {
    CoachItem,
    BaseCard,
    BaseButton,
    BaseBadge,
    CoachFilter,
  },
  data() {
    return {
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
      return this.$store.getters["coaches/coaches"];
    },
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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

.side-filter {
  padding: 30px;
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
