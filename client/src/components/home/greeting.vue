<template>
  <div
    id="greeting"
    class="greeting"
  >
    <h1 class="greeting__h1">
      Hello I'm
    </h1>
    <h2>
      Max Stepanov
    </h2>
    <p>
      Professional web developer
    </p>
  </div>
</template>

<script>
export default {
  name: 'greeting',
};
</script>

<style lang="scss">
.greeting {
  text-align: left;

  &__h1 {
    color: blue;
  }
}
</style>