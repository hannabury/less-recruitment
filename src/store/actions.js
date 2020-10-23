import Vue from "vue";

/**
 * fetch all tickers
 */
export const fetchAllTickers = async ({ commit }) => {
  const { data: response } = await Vue.http.get(`tickers`);
  commit("setTickers", response);
};

/**
 * fetch coin details
 */
export const fetchCoin = async ({ commit }, coinId) => {
  const { data: response } = await Vue.http.get(`coins/${coinId}`);
  commit("setCoin", response);
};

/**
 * fetch ticker for coin
 */
export const fetchTickerForCoin = async ({ commit }, coinId) => {
  const { data: response } = await Vue.http.get(`tickers/${coinId}`, {
    params: { quotes: "USD,BTC,ETH" }
  });
  commit("setTicker", response);
};
