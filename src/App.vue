<template>
  <div id="app">
    <div class="nav container">
      <router-link to="/" class="nav__logo">
        <img src="@/assets/logo.png" alt="CEX logo">
      </router-link>
      <ul class="nav__links">
        <li>
          <router-link to="/coins" class="nav__link">Coins</router-link>
        </li>
        <li>
          <router-link to="/icos" class="nav__link">ICO's</router-link>
        </li>
        <li>
          <router-link to="/markets" class="nav__link">Markets</router-link>
        </li>
        <li>
          <router-link to="/exchanges" class="nav__link">Exchanges</router-link>
        </li>
        <li>
          <router-link to="/wallets" class="nav__link">Wallets</router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

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

  &__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-end;
  }

  &__link {
    display: inline-block;
    color: $color-grey-light;
    text-decoration: none;
    padding: 16px;
    border-bottom: 4px solid transparent;

    &:hover {
      color: $color-brand;
    }

    &.router-link-active {
      border-color: $color-grey-light;
    }
  }

}
</style>
