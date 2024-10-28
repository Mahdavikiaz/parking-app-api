import { Sequelize } from 'sequelize';

const connection = new Sequelize('sparking', 'root', 'admin1234', {
  host: 'localhost',
  dialect: 'mysql',
});

export default connection;
