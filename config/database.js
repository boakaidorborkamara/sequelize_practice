const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './model/sample.db'
});

async function testConnection(){
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;