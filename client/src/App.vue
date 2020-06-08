<template>
  <div
    id="app"
    class="app"
  >
    <Header />
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import Header from './components/header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>