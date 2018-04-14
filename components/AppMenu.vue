<template>
  <div class="menu-container">

    <div class="menu-container__home-container">
      <nuxt-link class="menu-container__link" to="/">
        <span class="hidden-lg"><icon name="home"></icon></span>
        <span class="hidden-sm">Accueil</span>
      </nuxt-link>
    </div>

    <div class="hidden-lg menu-container__call-container">
      <nuxt-link class="menu-container__link" to="/">
        <icon name="phone" flip="horizontal"></icon>
      </nuxt-link>
    </div>

    <div
      class="hidden-lg menu-container__burger-container"
      @click="toggle"
    >
      <nuxt-link
        class="menu-container__link"
        to="#"
      >
        <burger-icon :isOpened="isNavDisplayed"/>
      </nuxt-link>
    </div>

    <transition name="fade">
    <div
      class="menu-container__nav-container"
      v-show="isNavDisplayed"
    >
      <ul class="menu-container__list">
        <li
          class="menu-container__link-container"
          v-for="link in links"
          :key="link.key"
        >
          <nuxt-link
            class="menu-container__link"
            :to="link.path">
            {{link.name}}
          </nuxt-link>
        </li>
      </ul>
    </div>
    </transition>

  </div>
</template>

<script>
import Icon from 'vue-awesome/components/Icon'
import BurgerIcon from './BurgerIcon'

export default {
  components: {
    Icon,
    BurgerIcon
  },
  data: () => {
    return {
      links: [
        { name: "Le cabinet", path: "/cabinet" },
        { name: "Les traitements", path: "/traitements" },
        { name: "Les urgences", path: "/urgences" },
        { name: "Fiches conseils", path: "/conseils" },
        { name: "Plan d'accès", path: "/acces" },
        { name: "Contact", path: "/contact" }
      ],
      isNavDisplayed: true
    }
  },
  methods: {
    toggle: function () {
      this.isNavDisplayed = !this.isNavDisplayed
    }
  }
}
</script>

<style lang="scss">
@import "../assets/style/_variables.scss";
@import "../assets/style/_base.scss";

@media (min-width: 1000px) {
  .menu-container {
    background-color: $vue-turquoise;
    height: 66px;
    display: flex;
    justify-content: space-between;

    &__home-container {
      height: 100%;
      margin-left: 15px;
      margin-right: 15px;
    }

    &__link-container {
      display: inline-block;
      height: 100%;
      margin-left: 15px;
      margin-right: 15px;

      &:hover {
        cursor: pointer;
        text-decoration: none;
        border-bottom: 4px solid $light-gray;
      }
    }

    &__link {
      color: $light-gray;
      text-decoration: none;
      font-weight: bold;
      line-height: 66px;
    }
  }
}

@media (max-width: 999px) {
  .menu-container {
    display: block;

    &__home-container {
      background-color: $vue-turquoise;
      position: absolute;
      border-radius: 20px;
      margin: 10px 10px 10px 15px;
      padding: 0 10px;
      z-index: 3;
    }

    &__call-container {
      background-color: $vue-turquoise;
      position: absolute;
      border-radius: 20px;
      margin: 10px 10px 10px 65px;
      padding: 0 10px;
      z-index: 3;
    }

    &__burger-container {
      position: absolute;
      right: 0;
      margin: 15px 15px 10px 10px;
      z-index: 3;
    }

    &__nav-container {
      position: fixed;
      background-color: $vue-turquoise;
      height: 100%;
      width: 100%;
      z-index: 2;
      opacity: 0.8;
      overflow: hidden;
    }

    &__list {
      padding: 0;
      margin-top: 50vh;
      transform: translateY(-50%);
    }

    &__link-container {
      width: 100%;
      text-align: center;
      list-style: none;
      padding: 10px;
    }

    &__link {
      color: $light-gray;
      text-decoration: none;
      font-size: 28px;
      line-height: 40px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: all .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
      transform: scale(1.2);
    }
  }
}
</style>
