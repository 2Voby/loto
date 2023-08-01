const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, unique: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  username: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.STRING, defaultValue: false },
  balance: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Token = sequelize.define("token", {
  userId: { type: DataTypes.INTEGER },
  refreshToken: { type: DataTypes.STRING },
});

User.hasMany(Token);
Token.belongsTo(User);

module.exports = {
  User,
  Token,
};
