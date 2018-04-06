<template>
  <div class="menu-container">
    <nuxt-link class="menu-container__tab" to="/">Accueil</nuxt-link>
    <nuxt-link class="menu-container__tab" to="/cabinet">Le cabinet</nuxt-link>
    <nuxt-link class="menu-container__tab" to="/traitements">Les traitements</nuxt-link>
    <nuxt-link class="menu-container__tab" to="/urgences">Les urgences</nuxt-link>
    <nuxt-link class="menu-container__tab" to="/conseils">Fiches conseils</nuxt-link>
    <nuxt-link class="menu-container__tab" to="/acces">Plan d'accès</nuxt-link>
    <nuxt-link class="menu-container__tab" to="/contact">Contact</nuxt-link>
  </div>
</template>

<style lang="scss">
  @import "../assets/style/_variables.scss";

  .menu-container {
    background-color: $vue-darkest-blue;
    height: 66px;

    &__tab {
      color: $light-gray;
      text-decoration: none;
      display: inline-block;
      margin: 25px 20px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
