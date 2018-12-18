const person = {
    firstName: 'Mateus',
    lastName: 'Miguel',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1]
    }
};

//setter
// person.fullName = 'Jessica Medeiros';

console.log(person.fullName);