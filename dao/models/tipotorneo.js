'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoTorneo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TipoTorneo.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoTorneo',
    freezeTableName : true
  });
  return TipoTorneo;
};