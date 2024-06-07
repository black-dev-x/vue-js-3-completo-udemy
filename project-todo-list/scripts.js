const tasks = JSON.parse(localStorage.getItem('tasks') || '[]')

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
  },
  updated() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  },
};
const generateTask = (task) => ({ task, done: false });

Vue.createApp(todoApp).mount('#app');
