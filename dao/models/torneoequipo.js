'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TorneoEquipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TorneoEquipo.belongsTo(models.Torneo, {
        foreignKey : {
          name : 'torneoId'
        }
      })
      TorneoEquipo.belongsTo(models.Equipo, {
        foreignKey : {
          name : 'equipoId'
        }
      })
    }
  };
  TorneoEquipo.init({
    torneoId: DataTypes.INTEGER,
    equipoId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TorneoEquipo',
    freezeTableName : true
  });
  return TorneoEquipo;
};