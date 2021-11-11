'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Torneo', 'tipoTorneoId', {
      type : Sequelize.INTEGER,
      allowNull : true
    })

    await queryInterface.addConstraint('Torneo', {
      fields : ['tipoTorneoId'],
      type : 'FOREIGN KEY',
      name : 'FK_TORNEO_TIPOTORNEO',
      references : {
        table : 'TipoTorneo',
        field : 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Torneo', 'FK_TORNEO_TIPOTORNEO')
    await queryInterface.removeColumn('Torneo', 'tipoTorneoId')
  }
};
