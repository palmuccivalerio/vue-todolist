
var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: []
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo, done: false });
      this.newTodo = '';
    },
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
    }
  }
})
