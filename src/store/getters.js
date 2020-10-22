export default {
  getAllTickers: state => state.tickers,
  getTickers: state => page => state.tickers.slice(page*10, ((page+1)*10)),
  getTotalTickers: state => state.tickers.length,
};