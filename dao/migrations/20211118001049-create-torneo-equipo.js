'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TorneoEquipo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      torneoId: {
        type: Sequelize.INTEGER
      },
      equipoId: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint('TorneoEquipo', {
      fields : ['torneoId'],
      type : 'FOREIGN KEY',
      name : 'FK_TORNEOEQUIPO_TORNEO',
      references : {
        table : 'Torneo',
        field : 'id'
      }
    })

    await queryInterface.addConstraint('TorneoEquipo', {
      fields : ['equipoId'],
      type : 'FOREIGN KEY',
      name : 'FK_TORNEOEQUIPO_EQUIPO',
      references : {
        table : 'Equipo',
        field : 'id'
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('TorneoEquipo', 'FK_TORNEOEQUIPO_TORNEO' )
    await queryInterface.removeConstraint('TorneoEquipo', 'FK_TORNEOEQUIPO_EQUIPO' )
    await queryInterface.dropTable('TorneoEquipo');
  }
};