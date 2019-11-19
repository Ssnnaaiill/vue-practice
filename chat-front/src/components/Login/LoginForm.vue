<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
      <v-text-field
        v-model="userName"
        label="대화명"
        required
        v-on:keyup.enter="joinSubmit"
      ></v-text-field>
      <div class="text-xs-center">
        <v-btn v-on:click="joinSubmit" round color="teal" dark>JOIN</v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LoginForm',
  props: ['join'],
  data: () => ({
    userName: '',
  }),
  methods: {
    joinSubmit() {
      this.$emit('joinSubmit', this.userName);
    },
  },
};
</script>

<style></style>
