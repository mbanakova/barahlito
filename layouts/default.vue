<template>
  <div class="main">
    <TheHeader @sidenavToggle="displaySideNav = !displaySideNav" />
    <TheSidenav :show="displaySideNav" @close="displaySideNav = false" />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader";
import TheSidenav from "@/components/Navigation/TheSidenav";
import TheFooter from "@/components/Navigation/TheFooter";
export default {
  // middleware: "log",
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
  },
  data() {
    return {
      displaySideNav: false,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  overflow-x: hidden;
}

.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.wrapper {
  max-width: 1440px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
}
</style>
