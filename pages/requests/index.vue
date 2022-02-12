<template>
  <div class="wrapper">
    <requests-received></requests-received>
  </div>
</template>

<script>
import RequestsReceived from "../../components/Requests/RequestsReceived.vue";

export default {
  middleware: ["check-auth", "auth"],
  components: { RequestsReceived },
};
</script>

<style></style>
