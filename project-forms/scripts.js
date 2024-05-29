members = [
    {
        firstName: 'John',
        lastName: 'Lennon',
        instrument: 'Violão'
    },
    {
        firstName: 'George',
        lastName: 'Harrison',
        instrument: 'Guitarra'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {}
        }
    },
    methods: {
      addMember() {
        this.members.push(this.newMember);
        this.newMember = {};
      }
    }

};

Vue.createApp(handlingForms).mount('#app');
