const app = new Vue({
  el: '#app',

  // variables of vue app
  data: {
    message: 'Hello Vue.js!',
    count: 0,
    list: ['765', '346', '283'],
    show: true,
  },
  // methods of vue app
  methods: {
    handleClick: event => {
      alert(event.target); // result: [object HTMLButtonElement]
    },
  },
});

app.list.push('315');

console.log(app.message);
