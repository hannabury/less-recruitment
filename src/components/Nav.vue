<template>
  <ul class="nav__links" :class="additionalClass">
    <li v-for="link in links" :key="link.path">
      <router-link :to="link.path" class="nav__link">{{
        link.name
      }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Nav",
  props: ["links", "additionalClass"]
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";

.nav {
  &__links {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-end;
  }

  &__links_footer {
    margin-bottom: 16px;

    .nav__link {
      color: $color-grey;
      border: none;
    }
  }

  &__link {
    display: inline-block;
    color: $color-grey-light;
    text-decoration: none;
    text-transform: uppercase;
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
