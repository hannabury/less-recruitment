import Vue from "vue";
import VueRouter from "vue-router";
import Listing from "../views/Listing.vue";
import Details from "../views/Details.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Listing",
    component: Listing
  },
  {
    path: "/listing",
    name: "Listing",
    component: Listing,
  },
  {
    path: '/listing/:id',
    name: "Details",
    component: Details,
  }
];

const router = new VueRouter({
  routes
});

export default router;
