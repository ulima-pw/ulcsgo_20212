'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Equipo.hasMany(models.TorneoEquipo, {
        foreignKey : 'equipoId'
      })
    }
  };
  Equipo.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Equipo',
    freezeTableName : true
  });
  return Equipo;
};