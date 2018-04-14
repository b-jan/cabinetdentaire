<template>
  <div>
    <app-menu/>
    <div class="page-container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  import 'vue-awesome/icons'
  import AppMenu from '~/components/AppMenu.vue'

  export default {
    components: {
      AppMenu
    }
  }
</script>

<style lang="scss">
  .page-container {
    min-height: 100vh;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 1000px) {
    .page-container {
      padding: 35px 10px 10px 10px;
    }
  }

  @media (max-width: 999px) {
    .page-container {
      padding: 70px 5px 5px 5px;
    }
  }
</style>
