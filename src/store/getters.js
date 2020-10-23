import { ITEMS_PER_PAGE } from '@/constants';

export default {
  getAllTickers: state => state.tickers,
  getTickers: state => page => state.tickers.slice(page*ITEMS_PER_PAGE, ((page+1)*ITEMS_PER_PAGE)),
  getTotalTickers: state => state.tickers.length,
  getCoin: state => state.coin,
  getTicker: state => state.ticker,
};