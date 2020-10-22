<template>
  <div 
    class="listing__item"
    @click="$emit('on-click')"
  >
    <div class="listing__cell_image"><img src="@/assets/icon.png" alt="Coin logo"></div>
    <div class="listing__cell_name">
      <span class="listing__item_value">{{ item.name }}</span>
      <br/>
      <span class="listing__item_additional">{{ item.symbol }}</span>
    </div>
    <div class="listing__cell_price" :class="typeOfChange">
      <span class="listing__item_value">$ {{ item.quotes.USD.price }}</span>
      <br/>
      <span class="listing__item_additional">{{ item.quotes.USD.percent_change_1h }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: [ 'item' ],
  computed: {
    typeOfChange() {
      return this.item.quotes.USD.percent_change_1h < 0 ? 'decrease' : 'increase';
    }
  }
  
}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.listing__item {
  background: $color-white;
  box-shadow: 0 0 10px 0 #ccc;
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  &_value {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
  }

  &_additional {
    font-style: italic;
    font-size: 12px;
  }
}

.listing__cell {
  &_image {
    img {
      display: block;
      margin: 10px auto;
    }
  }

  &_price {
    text-align: right;
    padding-right: 16px;
    margin-right: 8px;

    .listing__item_additional {
      font-style: normal;
    }

    &.increase {
      background: url('../../assets/arrow-increase.png') no-repeat right center;
      .listing__item_additional {
        color: $color-green;
      }
    }

    &.decrease {
      background: url('../../assets/arrow-decrease.png') no-repeat right center;
      .listing__item_additional {
        color: $color-red;
      }
    }
  }
}
</style>
