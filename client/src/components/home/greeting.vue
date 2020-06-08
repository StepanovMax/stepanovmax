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
    <button @click="fetchMessage()">
      Click to fetch data!
    </button>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'greeting',
  data() {
    return {
      message: null
    }
  },
  methods: {
    fetchMessage() {
      fetch('//localhost:9001/api/test')
        /*
          Converting to json
        */
        .then(response => response.json())
        /*
          Output the result of the executing response.json() to the console.
        */
        .then(data => {
          // console.log('Data ::', data)
          this.message = data.message
        })
        .catch(
          error => console.log('Error ::', error)
        )
    }
  }
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