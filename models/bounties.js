'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bounties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bounties.init({
    name: DataTypes.STRING,
    wantedFor: DataTypes.STRING,
    reward: DataTypes.INTEGER,
    captured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'bounties',
  });
  return bounties;
};