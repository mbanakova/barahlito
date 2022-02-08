<template>
  <div>
    <section class="intro">
      <div class="wrapper">
        <h1>Give your trash a new life!</h1>
      </div>
    </section>
    <CoachesList />
  </div>
</template>

<script>
export default {};
</script>

<style>
.intro {
  height: 200px;
  position: relative;
  background-image: linear-gradient(60deg, #222, #212e4e);
  /* background-image: url("~assets/images/main-page-bg.jpg"); */
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 60%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(255, 255, 255);
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}
</style>
