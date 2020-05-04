<template>
  <div id="app">
    <ul>
      <li>
        <router-link :to="{ name: 'home' }">
          Home
        </router-link>
       </li>
      <li>
        <router-link :to="{ name: 'blog' }">
          Blog
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'admin' }">
          Admin
        </router-link>
      </li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
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
