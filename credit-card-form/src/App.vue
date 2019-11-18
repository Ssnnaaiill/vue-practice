<template>
  <div id="app">
    <card-form />
  </div>
</template>

<script>
import CardForm from './components/CardForm.vue';

export default {
  name: 'app',
  components: {
    CardForm,
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
