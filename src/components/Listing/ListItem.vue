<template>
  <div class="listing__item">
    <div class="listing__cell_image"><img src="@/assets/icon.png" alt="Coin logo"></div>
    <div class="listing__cell_name">
      {{ item.name }}
      <br/>
      {{ item.symbol }}
    </div>
    <div class="listing__cell_price">
      {{ item.quotes.USD.price }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: [ 'item' ]
  
}
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.listing__item {
  background: $color-white;
  box-shadow: 0 0 10px 0 #ccc;
  margin-bottom: 16px;
  display: flex;
}

.listing__cell {
  
}
</style>
