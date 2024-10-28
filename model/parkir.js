import { DataTypes } from 'sequelize';
import connection from './connection.js';
import User from './user.js';

const Parkir = connection.define(
  'Parkir',
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: 'users',
      key: 'id',
    },
    duration: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    nopol: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'parking',
  }
);

Parkir.belongsTo(User, { targetKey: 'id', foreignKey: 'user_id' });
export default Parkir;
