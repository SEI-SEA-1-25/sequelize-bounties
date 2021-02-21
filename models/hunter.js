'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hunter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.hunter.belongsTo(models.bounty)
    }
  };
  hunter.init({
    name: DataTypes.TEXT,
    client: DataTypes.TEXT,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'hunter',
  });
  return hunter;
};