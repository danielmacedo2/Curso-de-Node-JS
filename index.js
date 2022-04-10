// const { Person } = require("./person"); // Object
const dotenv = require('dotenv');
const connectToDatabase = require('./src/database/connect');

dotenv.config();

connectToDatabase();

// require('./modules/path');
// require('./modules/fs');
// require('./modules/http');
require('./modules/express');

// const person = new Person('Daniel', 'Brazil')

// console.log(person.sayMyName());

// Nodemon servidor reiniciado automaticamente

