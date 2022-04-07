const { Person } = require("./person"); // Object

// require('./modules/path');
// require('./modules/fs');
// require('./modules/http');
require('./modules/express');

const person = new Person('Daniel', 'Brazil')

console.log(person.sayMyName());

// Nodemon servidor reiniciado automaticamente
