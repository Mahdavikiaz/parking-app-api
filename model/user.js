import { DataTypes } from 'sequelize';
import connection from './connection.js';

const User = connection.define(
  'User',
  {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  }
);

export default User;
