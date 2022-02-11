<template>
  <footer>
    <div class="wrapper footer-wrapper">
      <div class="copyright">© mbanakova, {{ getYear }}</div>
      <div class="framework">
        build on<span class="framework__logo">Nuxt.js</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: null,
    };
  },
  computed: {
    getYear() {
      return (this.year = new Date().getFullYear());
    },
  },
};
</script>

<style scoped>
footer {
  margin-top: auto;
  padding: 20px;
  background-color: #222222;
  color: white;
  font-size: 14px;
}

.footer-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.framework__logo {
  padding-left: 25px;
  position: relative;
}

.framework__logo::before {
  position: absolute;
  content: "";
  top: 0;
  left: 7px;
  width: 16px;
  height: 16px;
  background-image: url("~assets/images/nuxt.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
