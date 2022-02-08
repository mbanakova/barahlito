<template>
  <section>
    <base-card>
      <header>
        <h2>Requests on this offer</h2>
      </header>
      <ul v-if="hasRequests">
        <!-- :email это props из requestItem.vue, req.userEmail - ключ из actions объекта contactCoach.userEmail -->
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></request-item>
      </ul>
      <h3 v-else>This offer got no requests yet</h3>
    </base-card>
  </section>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard.vue";
import RequestItem from "@/components/Requests/RequestItem.vue";
export default {
  components: { BaseCard, RequestItem },
  computed: {
    receivedRequests() {
      // возвращает из store.state массив requests геттером requests
      return this.$store.getters["requests/requests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
