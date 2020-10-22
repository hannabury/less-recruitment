<template>
  <div class="listing-view container">
    <h1 class="heading_h1">Etam eniam dolor epsilon</h1>
    <p>{{ getTotalTickers }} crypto coins</p>
    <Loader v-if="showLoader" />
    <div class="listing" v-if="!showLoader">
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
    <div class="pagination">
      <button 
        v-if="page" 
        @click="showPreviousPage"
        class="pagination__button pagination__button_prev"
      >Previous page</button>
      <button
        v-if="(page+1)*10 < getTotalTickers"
        @click="showNextPage"
        class="pagination__button pagination__button_next"
      >Next page</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Loader from '@/components/common/Loader';
import ListItem from '@/components/Listing/ListItem';

export default {
  name: "Listing",
  components: { ListItem, Loader },
  data() {
    return {
      page: 0,
      showLoader: false
    }
  },
  watch: {
    $route(to) {
      this.page = to.query.page-1 || 0;
    }
  },
  computed: {
    ...mapGetters(['getTickers', 'getTotalTickers']),
    tickers() {
      return this.getTickers(this.page);
    }
  },
  async created() {
    this.showLoader = true;
    await this.$store.dispatch('fetchAllTickers');
    this.showLoader = false;
    this.page = this.$router.currentRoute.query.page-1 || 0;
  },
  methods: {
    showNextPage() {
      this.page++;
      this.updatePageQuery(this.page+1)
    },
    showPreviousPage() {
      this.updatePageQuery(this.page)
      this.page--;
    },
    updatePageQuery(page) {
      this.$router.push({
        query: {
          ...this.$router.currentRoute.query,
          page: page
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.listing {
  width: 100%;

  &__header {
    margin-bottom: 4px;
    display: flex;
    text-align: left;
    font-size: 12px;
  }

  &__cell {
    &_image {
      width: 100px;
    }
    &_name {
      width: calc(100% - 250px);
    }
    &_price {
      width: 150px;
    }
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: right;;
  
  &__button {
    color: white;
    background-color: $color-brand;
    background-repeat: no-repeat;
    border: none;
    padding: 8px 24px;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:before,
    &:after {
      display: inline-block;
    }

    &_next {
      margin-left: auto;
      
      &:after {
        content: url('../assets/arrow-pagination.png');
        margin-left: 8px;
      }
    }

    &_prev:before {
      content: url('../assets/arrow-pagination.png');
      margin-right: 8px;
      transform: rotate(180deg);
    }
  }
}
</style>

