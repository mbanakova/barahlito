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
            <nuxt-link to="/offers">Offers</nuxt-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <nuxt-link to="/requests">Requests</nuxt-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <nuxt-link to="/register">Add new offer</nuxt-link>
          </li>
          <li class="nav-item" v-else>
            <nuxt-link to="/auth">Login</nuxt-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <button class="logout" @click="onLogout">Logout</button>
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
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      console.log("logged out");
      this.$router.replace("/auth");
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
  gap: 20px;
}

.nav-item a,
.nav-item .logout {
  text-decoration: none;
  color: white;
  background-color: transparent;
  padding: 10px;
  border: 1px solid transparent;
  display: block;
  font-size: 16px;
  line-height: 20px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.nav-item:last-child {
  margin-left: 60px;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active,
.nav-item .logout:hover,
.nav-item .logout:active {
  color: #94ddff;
  border: 1px solid #94ddff;
}
</style>
