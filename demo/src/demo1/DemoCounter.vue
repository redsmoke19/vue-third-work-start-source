<template>
  <demo-container>
    <div class="counter">
      <counter-button @action="decrement"> - </counter-button>
      <counter-value :value="count" />
      <counter-button @action="increment"> + </counter-button>
    </div>
  </demo-container>
</template>

<script setup>
import CounterButton from "@/demo1/CounterButton.vue";
import CounterValue from "@/demo1/CounterValue.vue";
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
}
</style>
