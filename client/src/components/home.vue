<template>
  <div id="home">
    <Greeting />
  </div>
</template>

<script>
import Greeting from './home/greeting.vue'

export default {
  name: 'home',
  components: {
    Greeting
  },
};
</script>