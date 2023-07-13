<template>
  <div class="link_container">
    <router-link class="link" to="/">В меню</router-link>
  </div>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20rem;
}
.link {
  border-bottom: 1px solid #343838ff;
  color: #343838ff;
  padding-bottom: 0.25rem;
  text-decoration: none;
}
.link_container {
  margin-left: 2rem;
  margin-top: 2rem;
}
</style>
