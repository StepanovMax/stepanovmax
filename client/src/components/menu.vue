<template>
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
  </ul>
</template>

<script>
export default {
  name: 'menu',
};
</script>