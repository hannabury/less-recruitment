<template>
  <div class="pagination" v-if="showPrev || showNext">
    <button
      v-if="showPrev"
      @click="showPreviousPage"
      class="pagination__button pagination__button_prev"
    >
      Previous page
    </button>
    <button
      v-if="showNext"
      @click="showNextPage"
      class="pagination__button pagination__button_next"
    >
      Next page
    </button>
  </div>
</template>

<script>
import { ITEMS_PER_PAGE } from "@/constants";

export default {
  props: ["pageNum", "total"],
  data() {
    return {
      itemsPerPage: ITEMS_PER_PAGE,
      page: this.pageNum
    };
  },
  computed: {
    showPrev() {
      return this.pageNum;
    },
    showNext() {
      return (this.pageNum + 1) * this.itemsPerPage < this.total;
    }
  },
  methods: {
    showNextPage() {
      this.page++;
      this.updatePageQuery(this.page + 1);
      this.$emit("changePage", this.page);
    },
    showPreviousPage() {
      this.updatePageQuery(this.page);
      this.page--;
      this.$emit("changePage", this.page);
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

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: right;

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
        content: url("../assets/arrow-pagination.png");
        margin-left: 8px;
      }
    }

    &_prev:before {
      content: url("../assets/arrow-pagination.png");
      margin-right: 8px;
      transform: rotate(180deg);
    }
  }
}
</style>
