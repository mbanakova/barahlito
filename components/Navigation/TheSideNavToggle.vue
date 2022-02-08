<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.drawer-toggle {
  width: 25px;
  height: 25px;
  position: relative;
  cursor: pointer;
}

@media (min-width: 768px) {
  .drawer-toggle {
    display: none;
  }
}

.drawer-toggle .bar {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  background-color: white;
  box-shadow: 0 8px 0 0 white, 0 -8px 0 0 white;
}
</style>
