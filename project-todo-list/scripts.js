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
    // not very effective, just an example of how to use a lifecycle 
    // this would be too heavy intensive for a real app
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  },
};
const generateTask = (task) => ({ task, done: false });

Vue.createApp(todoApp).mount('#app');
