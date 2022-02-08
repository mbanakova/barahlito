<template>
  <base-card>
    <h2>Find an offer</h2>
    <span class="filter-option">
      <input type="checkbox" id="apparel" checked @change="setFilter" />
      <label for="apparel">apparel</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="home" checked @change="setFilter" />
      <label for="home">home</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="toys" checked @change="setFilter" />
      <label for="toys">toys</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="sport" checked @change="setFilter" />
      <label for="sport">sport</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="books" checked @change="setFilter" />
      <label for="books">books</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="kitchen" checked @change="setFilter" />
      <label for="kitchen">kitchen</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="hobby" checked @change="setFilter" />
      <label for="hobby">hobby</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="auto" checked @change="setFilter" />
      <label for="auto">auto</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="ussr" checked @change="setFilter" />
      <label for="ussr">ussr</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="plants" checked @change="setFilter" />
      <label for="plants">plants</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="pets" checked @change="setFilter" />
      <label for="pets">pets</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="leisure" checked @change="setFilter" />
      <label for="leisure">leisure</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="others" checked @change="setFilter" />
      <label for="others">others</label>
    </span>
  </base-card>
</template>

<script>
import BaseCard from "../UI/BaseCard.vue";
export default {
  components: { BaseCard },
  emits: ["change-filter"],
  data() {
    return {
      filters: {
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
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("change-filter", updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
