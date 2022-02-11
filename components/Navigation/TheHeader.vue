<template>
  <!-- <div class="header-container"> -->
  <header class="the-header">
    <div class="wrapper header-wrapper">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="logo">
        <nuxt-link to="/">Барахлито</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/coaches">Coaches</nuxt-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <nuxt-link to="/requests">Requests</nuxt-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <nuxt-link to="/register">Register</nuxt-link>
          </li>
          <li class="nav-item" v-else>
            <nuxt-link to="/auth">Login</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <!-- </div> -->
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
  },
  computed: {
    isLoggedIn() {
      // module Auth is not namespaced, so we can access like this
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #222222;
}

.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
  padding: 10px;
  border: 1px solid transparent;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: #94ddff;
  border: 1px solid #94ddff;
}
</style>
