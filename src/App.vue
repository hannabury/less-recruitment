<template>
  <div id="app">
    <header class="nav container">
      <router-link to="/" class="nav__logo">
        <img src="@/assets/logo.png" alt="CEX logo" />
      </router-link>
      <Nav :links="nav" />
    </header>
    <div class="content">
      <router-view />
    </div>
    <footer class="nav_footer container">
      <router-link to="/" class="nav__logo">
        <img src="@/assets/logo-simple.png" alt="CEX logo" />
      </router-link>
      <Nav :links="nav" additionalClass="nav__links_footer" />
    </footer>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  components: { Nav },
  data() {
    return {
      nav: [
        { path: "/coins", name: "Coins" },
        { path: "/icos", name: "ICO's" },
        { path: "/markets", name: "Markets" },
        { path: "/exchanges", name: "Exchanges" },
        { path: "/wallets", name: "Wallets" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.nav {
  background: $color-grey;
  display: flex;
  align-items: flex-end;

  &__logo {
    display: inline-block;
    margin: 8px;
    padding: 0;
  }

  &_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
