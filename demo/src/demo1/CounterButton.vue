<template>
  <button class="counter-button" @click="clickButton">
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(["action"]);

const clickButton = () => {
  emit("action");
};
</script>

<style scoped>
.counter-button {
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
</style>
