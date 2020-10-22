import Vue from "vue";

/**
 * fetching all coins
 */
export const fetchAllTickers= async ({ commit }) => {
  const { data: response } = await Vue.http.get("https://api.coinpaprika.com/v1/tickers");
  commit('setTickers', response);
};
