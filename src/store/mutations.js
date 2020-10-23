export default {
  setTickers(state, payload = {}) {
    state.tickers = payload;
  },
  setCoin(state, payload = {}) {
    state.coin = payload;
  },
  setTicker(state, payload = {}) {
    state.ticker = payload;
  }
};
