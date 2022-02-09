<template>
  <li>
    <div>
      <a :href="emailLink">{{ email }}</a>
      <p>{{ message }}</p>
    </div>
  </li>
</template>

<script>
export default {
  // пропсы - это от родителя потомку, ul передаёт пропс в li, а сам он его берёт из vuex.store
  props: ["email", "message"],
  computed: {
    emailLink() {
      return "mailto:" + this.email;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #275a81;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #1d6d92;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
