<template>
  <div class="wrapper offer__page">
    <section class="offer__img">
      <base-card>
        <div class="offer__thumbnail">
          <img :src="thumbnail" :alt="title" />
        </div>
      </base-card>
    </section>
    <section class="offer__info">
      <base-card>
        <h2>{{ title }}</h2>
        <h3>$ {{ rate }}</h3>
        <p>{{ description }}</p>
        <h3 class="offer__owner">{{ owner }}</h3>
        <h3 class="offer__date">{{ date }}</h3>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :badgeTitle="area"
        ></base-badge>
      </base-card>
    </section>
    <section class="offer__chat">
      <base-card>
        <header>
          <h2>Intrested? Contact the owner!</h2>
          <base-button link :to="contactLink" mode="bright"
            >Contact</base-button
          >
        </header>
        <!-- <router-view></router-view> -->
        <contact-coach></contact-coach>
      </base-card>
    </section>
  </div>
</template>

<script>
import ContactCoach from "../Requests/ContactCoach.vue";
import BaseBadge from "../UI/BaseBadge.vue";
import BaseButton from "../UI/BaseButton.vue";
import BaseCard from "../UI/BaseCard.vue";

export default {
  components: { BaseCard, BaseButton, BaseBadge, ContactCoach },
  props: ["id"],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    date() {
      return this.selectedCoach.date;
    },
    title() {
      return this.selectedCoach.title;
    },
    owner() {
      return this.selectedCoach.owner;
    },
    thumbnail() {
      return this.selectedCoach.thumbnail;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      return this.$route.path + "/contact";
    },
  },
  created() {
    this.selectedCoach = this.$store.getters["coaches/coaches"].find(
      (coach) => coach.id === this.$route.params.id
    );
  },
};
</script>

<style scoped>
.offer__page {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-template-areas: "img info" "img chat";
  grid-gap: 30px;
}

.offer__img {
  grid-area: img;
}
.offer__info {
  grid-area: info;
}
.offer__chat {
  grid-area: chat;
}

.offer__thumbnail {
  max-width: 100%;
}

.offer__thumbnail img {
  display: block;
  width: 100%;
  height: auto;
}
.offer__date {
  color: #c5c5c5;
  font-weight: 700;
  text-align: left;
  margin-bottom: 20px;
}
</style>
