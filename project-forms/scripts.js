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
        if(this.newMember.firstName && this.newMember.lastName && this.newMember.instrument) {
          this.members.push(this.newMember);
          this.newMember = {};
        } else {
          alert('Preencha todos os campos');
        }
      }
    }

};

Vue.createApp(handlingForms).mount('#app');
