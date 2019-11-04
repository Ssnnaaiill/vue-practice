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
    handleClick: function(event) {
      alert(event.target); // result: [object HTMLButtonElement]
    },
  },
});

app.list.push('315');

console.log(app.message);

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
});

const app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' },
    ],
  },
});
