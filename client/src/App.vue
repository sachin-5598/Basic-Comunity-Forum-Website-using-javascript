<template>
  <app-nav></app-nav>
  <router-view class="container"/>
</template>

<script>
import AppNav from '@/components/AppNav.vue';

export default {
  components: {
    AppNav,
  },
};
</script>

<style lang="scss">

</style>
