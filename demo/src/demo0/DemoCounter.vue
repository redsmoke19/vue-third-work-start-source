<template>
  <demo-container>
    <div class="counter">
      <button @click="decrement">-</button>
      <span> Current value: {{ count }} </span>
      <button @click="increment">+</button>
    </div>
  </demo-container>
</template>

<script setup>
import DemoContainer from "../components/DemoContainer.vue";
import { ref } from "vue";

const count = ref(0);

/* Метод уменьшения значения */
const decrement = () => {
  count.value = count.value - 1;
};

/* Метод увеличения значения */
const increment = () => {
  count.value = count.value + 1;
};
</script>

<style lang="scss" scoped>
.counter {
  padding: 40px;
  display: flex;
  align-items: center;

  button {
    margin: 0 10px;
    font-size: 1.5rem;
    line-height: 1;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    background: #dd0000;
    color: white;
    cursor: pointer;

    &:hover {
      background: #ff0000;
    }
  }
}
</style>
