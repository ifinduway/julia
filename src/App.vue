<template>
  <div class="d-flex flex-column">
    <header-view />
    <navigation-view />
    <content-view />
    <footer-view />
  </div>
</template>

<script>
import headerView from './components/headerView.vue';
import contentView from './components/contentView.vue';
import footerView from './components/footerView.vue';
import navigationView from './components/navigationView.vue'

export default {
  name: 'App',
  components: {
    headerView,
    contentView,
    footerView,
    navigationView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
