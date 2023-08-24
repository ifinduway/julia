<template>
  <div class="d-flex flex-column">
    <div class="kek">
      <header-view />
      <navigation-view />
      <content-view />
      <footer-view />
    </div>
  </div>
</template>

<script>
import headerView from './components/headerView.vue';
import contentView from './components/contentView.vue';
import footerView from './components/footerView.vue';
import navigationView from './components/navigationView.vue';

export default {
  name: 'App',
  components: {
    headerView,
    contentView,
    footerView,
    navigationView,
  },

  data: () => ({
    select: null,
    options: ['Option 1', 'Option 2', 'Option 3'],
    selectedOption: 'Option 1'
  }),

  methods: {
    handleInput(newOption) {
      this.selectedOption = newOption
    }
  },
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
