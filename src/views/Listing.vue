<template>
  <div class="listing-view container">
    <h1 class="heading_h1">Etam eniam dolor epsilon</h1>
    <p>{{ total }} crypto coins</p>
    <div class="listing">
      <div class="listing__header">
        <div class="listing__cell_image"></div>
        <div class="listing__cell_name">Nazwa</div>
        <div class="listing__cell_price">Cena USD</div>
      </div>
      <div class="listing__body">
        <template v-for="item in tickers">
          <ListItem :item="item" :key="item.id"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '@/components/Listing/ListItem';

export default {
  name: "Listing",
  components: { ListItem },
  computed: {
    tickers() {
      return this.$store.getters['getTickers'];
    },
    total() {
      return this.tickers.length;
    }
  },
  async created() {
    console.log('created');
    await await this.$store.dispatch('fetchAllTickers');
  },
  methods: {
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.listing {
  width: 100%;

  &__header {
    margin-bottom: 16px;
    display: flex;
    text-align: left;
  }

  &__cell {
    &_image {
      width: 100px;
    }
    &_name {
      width: calc(50% - 50px);
    }
    &_price {
      width: calc(50% - 50px);
    }
  }
}
</style>

