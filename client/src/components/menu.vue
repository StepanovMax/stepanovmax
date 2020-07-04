<template>
  <ul class="menu">
    <li class="menu__item">
      <router-link :to="{ name: 'home' }">
        Home
      </router-link>
    </li>
    <li class="menu__item">
      <router-link :to="{ name: 'blog' }">
        Blog
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'menu',
};
</script>