<template>
  <div class="detail-view container">
    <div>
      <div><img src="@/assets/icon.png" alt:="coin.name"/></div>
      <div>
        <h1>{{ coin.name }}</h1>
        <span>{{ coin.symbol }}</span>
        <div class="tags">
          <template v-for="tag in coin.tags">
            <span class="tag" :key="tag.id">{{ tag.name }}</span>
          </template>
        </div>
      </div>
    </div>

    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>1h</th>
            <th>24h</th>
            <th>Week</th>
            <th>Month</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(quote, key) in ticker.quotes" :key="key">
            <td>
              <span>{{ quote.price }} {{ key }}</span>
              <span>({{ quote.percent_change_15m }}%)</span>
            </td>
            <td>
              <span>{{ quote.percent_change_1h }}%</span>
            </td>
            <td>
              <span>{{ quote.percent_change_24h }}%</span>
            </td>
            <td>
              <span>{{ quote.percent_change_7d }}%</span>
            </td>
            <td>
              <span>{{ quote.percent_change_30d }}%</span>
            </td>
            <td>
              <span>{{ quote.percent_change_1y }}%</span>
            </td>
          </tr>
        </tbody>
      </table>
      <p>{{ coin.description }}</p>
    </div>

    <div>
      <h2>Coin details</h2>
      <div>
        <ul>
          <li><span>Started</span><span>{{ coin.started_at }}</span></li>
          <li><span>Working product</span><span>{{ coin.is_active }}</span></li>
          <li><span>Org. Structure</span><span>{{ coin.org_structure }}</span></li>
          <li><span>Transactions (24h)</span><span></span></li>
          <li><span>Proof Type</span><span>{{ coin.proof_type }}</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: '',
    }
  },
  computed: {
    coin() {
      return this.$store.getters.getCoin;
    },
    ticker() {
      return this.$store.getters.getTicker;
    }
  },
  async created() {
    this.coinId = this.$router.currentRoute.params.id;
    await this.$store.dispatch('fetchCoin', this.coinId);
    await this.$store.dispatch('fetchTickerForCoin', this.coinId);
  }

}
</script>

<style lang="scss">

</style>