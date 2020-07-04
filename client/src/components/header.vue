<template>
  <header
    id="header"
    class="header"
  >
    <Logo />
    <Menu />
  </header>
</template>

<script>
import Logo from './logo.vue'
import Menu from './menu.vue'

export default {
  name: 'header',
  components: {
    Logo,
    Menu
  },
};
</script>