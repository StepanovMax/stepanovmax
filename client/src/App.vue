<template>
  <div id="app">
    <Header />
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    Header
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 30px;
  font-weight: 700;
}
</style>
