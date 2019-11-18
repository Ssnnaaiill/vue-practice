<template>
  <div id="app">
    Parent counter: {{ count }}
    <button v-on:click="addCounter">+</button>
    <button v-on:click="subCounter">-</button>
    <Child v-bind:passedCounter="counter"></Child>
  </div>
</template>

<script>
import Child from '@/components/Child';

export default {
  name: 'app',
  data: () => ({
    counter: 0,
  }),
  components: {
    Child,
  },
  methods: {
    addCounter() {
      this.counter++;
    },
    subCounter() {
      this.counter--;
    },
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
</style>
