<!--<template>-->
<!--  <p style="color: red">{{ name }}</p>-->
<!--  <EventsChild :name="name" @setName="setName" />-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from "vue";-->
<!--import EventsChild from "./EventsChild.vue";-->

<!--const name = ref("Василий Петров");-->

<!--const setName = (value) => {-->
<!--  name.value = value;-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <p>{{ name }}</p>-->
<!--  <EventChild v-model:name="name" />-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref } from "vue";-->
<!--import EventChild from "./EventsChild.vue";-->

<!--const name = ref("Василий Петров");-->
<!--</script>-->

<template>
  <DemoContainer>
    <p>{{ name }}</p>
    <EventsChild v-model:name="name" />
  </DemoContainer>
</template>

<script setup>
import { ref } from "vue";
import EventsChild from "./EventsChild.vue";
import DemoContainer from "../components/DemoContainer.vue";

const name = ref("Василий Петров");
</script>
