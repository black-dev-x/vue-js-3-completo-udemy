const tasks = [];

const todoApp = {
  data() {
    return {
      tasks,
      taskName: '',
    };
  },
  methods: {
    addTask: function () {
      if (this.taskName.trim() === '') {
        return;
      }
      const task = this.tasks.find((task) => task.task === this.taskName);
      if(task) { 
        alert('Task already exists');
        return;
      }
      this.tasks.push(generateTask(this.taskName));
      this.taskName = '';
    },
    removeTask: function (index) {
      this.tasks.splice(index, 1);
    },
    clearAll: function () {
      this.tasks = [];
    }
  },
};
const generateTask = (task) => ({ task, done: false });

Vue.createApp(todoApp).mount('#app');
