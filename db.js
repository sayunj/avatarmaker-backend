const Sequelize = require('sequelize');

const database = 'avatarmaker';
const username = 'root';
const password = null;
const host = 'localhost';

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

export const Person = sequelize.define('person', {
  name: Sequelize.STRING,
  gender: Sequelize.STRING,
  age: Sequelize.INTEGER
});
