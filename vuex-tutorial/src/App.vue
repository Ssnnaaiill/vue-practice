<template>
  <v-app>
    <v-content>
      <Counter />
    </v-content>
  </v-app>
</template>

<script>
import Counter from './components/Counter';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    Counter,
  },
};
</script>
