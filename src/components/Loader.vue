<template>
  <div class="loader__wrapper">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
.loader__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}

.loader {
  display: inline-block;
  width: 50px;
  height: 50px;

  &:after {
    content: " ";
    display: block;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 6px solid $color-grey;
    border-color: $color-grey transparent $color-grey transparent;
    animation: loader-spin 1.2s linear infinite;
  }
}

@keyframes loader-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
