import Vue from "vue";
import VueRouter from "vue-router";
import Coins from "../views/Coins/Index.vue";
import CoinsList from "../views/Coins/List.vue";
import CoinsDetails from "../views/Coins/Details.vue";
import Error404 from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: {
      name: 'coins'
    }
  },
  {
    path: "/coins",
    name: "coins",
    component: Coins,
    redirect: {
      name: 'coinsList',
    },
    children: [
      {
        path: 'list',
        name: 'coinsList',
        component: CoinsList,
      },
      {
        path: ':id',
        name: 'coinsDetails',
        component: CoinsDetails,
      },
    ],
  },
  { path: '*', component: Error404 }
];

const router = new VueRouter({
  routes
});

export default router;
