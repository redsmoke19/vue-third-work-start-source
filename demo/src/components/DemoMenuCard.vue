<template>
  <div class="card">
    <h2 class="card__title">{{ name }}</h2>
    <p class="card__apply">
      <span class="card__link">Перейти к демонстрации</span>
    </p>
    <router-link class="card__shadow-link" :to="link" />
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  margin: 20px;
  padding: 20px;
  position: relative;
  width: 20%;
  min-height: 20%;
  display: grid;
  grid-template-rows: 20px 50px 1fr 50px;
  border-radius: 10px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.25);
  transition: all 0.2s;
  background: radial-gradient(#6a797b, #343838);

  &:hover {
    .card__link::after {
      width: 100%;
    }
  }
}

.card:hover {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__link {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__title {
  grid-row: 3/4;
  font-weight: 400;
  color: #ffffff;
}

.card__apply {
  grid-row: 4/5;
  align-self: center;
}

.card__shadow-link {
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
