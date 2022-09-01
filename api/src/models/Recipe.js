const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    HS: {
      type: DataTypes.INTEGER
    },
    steps: {
      type: DataTypes.TEXT
    }
  }, {timestamps: false});
};
