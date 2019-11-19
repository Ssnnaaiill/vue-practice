<template>
  <div class="counter">
    <v-card raised>
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            Vuex Counter
          </v-list-item-title>
          <v-list-item-subtitle
            >Counter app using Vuex store and Vuetify plugin
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="80" color="#ccc">
          {{ count }}
        </v-list-item-avatar>
      </v-list-item>
      <v-card-actions>
        <v-btn v-on:click="addCount" dark>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn v-on:click="subCount" dark>
          <v-icon>mdi-minus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addCount() {
      this.$store.state.count++;
    },
    subCount() {
      this.$store.state.count--;
    },
  },
};
</script>

<style scoped lang="scss">
.counter {
  width: 100%;
  display: flex;
  justify-content: center;

  .v-card {
    margin-top: 15%;
    width: 344px;
  }
}
</style>
