<!--<template>-->
<!--  <div>-->
<!--    <p>{{ name }}</p>-->
<!--    <input :value="name" @input="emit('setName', $event.target.value)" />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { defineProps, defineEmits } from "vue";-->

<!--defineProps({-->
<!--  name: {-->
<!--    type: String,-->
<!--    required: true,-->
<!--  },-->
<!--});-->

<!--const emit = defineEmits(["setName"]);-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <input :value="name" @input="updateProps" />-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { defineProps, defineEmits } from "vue";-->

<!--defineProps({-->
<!--  name: {-->
<!--    type: String,-->
<!--    required: true,-->
<!--  },-->
<!--});-->

<!--const emit = defineEmits(["update:name"]);-->

<!--const updateProps = (event) => {-->
<!--  emit("update:name", event.target.value);-->
<!--};-->
<!--</script>-->

<template>
  <div>
    <input :value="name" @input="fooUpdate" />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

console.log(props);

const emit = defineEmits(["update:name"]);

const fooUpdate = (evt) => {
  emit("update:name", evt.target.value);
};
</script>
