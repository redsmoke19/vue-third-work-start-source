export default [
  {
    name: "Counter Base",
    path: "/counter-0",
    component: () => import("./demo0/DemoCounter.vue"),
  },
  {
    name: "Counter emit",
    path: "/counter-1",
    component: () => import("./demo1/DemoCounter.vue"),
  },
  {
    name: "Event Dem0",
    path: "/events-01",
    component: () => import("./components/EventsParent.vue"),
  },
  {
    name: "Store Counter",
    path: "/store-counter",
    component: () => import("./demo4/DemoCounter.vue"),
  },
];
