<template>
  <div>
    <hr />
    Child Counter: {{ passedCounter }}
    <br />
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  props: {
    passedCounter: Number,
  },
};
</script>

<style>
</style>