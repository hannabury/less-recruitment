import Vue from "vue";
import VueRouter from "vue-router";
import Listing from "../views/Listing.vue";

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
    children: [
      {
        path: ':id',
        name: "Detail",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Detail.vue")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
