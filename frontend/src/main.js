import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import { clickOutside } from './common/directives'

import router from "./router/index.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive('click-outside', clickOutside)

app.mount("#app");
