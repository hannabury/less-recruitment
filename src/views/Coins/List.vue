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
          <ListItem
            :item="item"
            :key="item.id"
            @on-click="showDetails(item.id)"
          />
        </template>
      </div>
    </div>
    <Pagination
      :pageNum="page"
      :total="getTotalTickers"
      @changePage="changePageHandler"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Loader from "@/components/Loader";
import Pagination from "@/components/Pagination";
import ListItem from "@/components/ListItem";

export default {
  name: "List",
  components: { ListItem, Loader, Pagination },
  data() {
    return {
      page: 0,
      showLoader: false
    };
  },
  watch: {
    $route(to) {
      this.page = to.query.page - 1 || 0;
    }
  },
  computed: {
    ...mapGetters(["getTickers", "getTotalTickers"]),
    tickers() {
      return this.getTickers(this.page);
    }
  },
  async created() {
    this.page = this.$router.currentRoute.query.page - 1 || 0;
    this.showLoader = true;
    await this.$store.dispatch("fetchAllTickers");
    this.showLoader = false;
  },
  methods: {
    showDetails(id) {
      this.$router.push({
        name: "coinsDetails",
        params: { id }
      });
    },
    changePageHandler(page) {
      this.page = page;
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
</style>
