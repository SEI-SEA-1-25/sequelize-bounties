"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bounty extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.bounty.hasMany(models.hunter);
    }
  }
  bounty.init(
    {
      name: DataTypes.TEXT,
      wantedFor: DataTypes.TEXT,
      reward: DataTypes.INTEGER,
      capture: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "bounty",
    }
  );
  return bounty;
};
