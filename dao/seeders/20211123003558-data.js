'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    // TipoTorneo
    await queryInterface.bulkInsert('TipoTorneo', [
      {nombre : "Liga", createdAt : new Date(), updatedAt : new Date()},
      {nombre : "Eliminatoria", createdAt : new Date(), updatedAt : new Date()}
    ])

    //Torneo
    await queryInterface.bulkInsert('Torneo', [
      {
        nombre : "Liga Sistemas 2022",
        tipoTorneoId : 1,
        fecha : new Date(),
        estado : 1,
        createdAt : new Date(), 
        updatedAt : new Date()
      },
      {
        nombre : "Torneo PW 2022",
        tipoTorneoId : 2,
        fecha : new Date(),
        estado : 1,
        createdAt : new Date(), 
        updatedAt : new Date()
      },
      {
        nombre : "UL Sports",
        tipoTorneoId : 1,
        fecha : new Date(),
        estado : 1,
        createdAt : new Date(), 
        updatedAt : new Date()
      }
    ])

    //Equipo
    await queryInterface.bulkInsert('Equipo', [
      {nombre : "PW", createdAt : new Date(), updatedAt : new Date()},
      {nombre : "PSG", createdAt : new Date(), updatedAt : new Date()}
    ])

    //Inscripcion (TorneoEquipo)

    await queryInterface.bulkInsert('TorneoEquipo', [
      {torneoId: 1, equipoId: 1, status : 1, createdAt : new Date(), updatedAt : new Date()},
      {torneoId: 1, equipoId: 2, status : 1, createdAt : new Date(), updatedAt : new Date()}
    ])

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('TorneoEquipo', null, {})
    await queryInterface.bulkDelete('Equipo', null, {})
    await queryInterface.bulkDelete('Torneo', null, {})
    await queryInterface.bulkDelete('TipoTorneo', null, {})
  }
};
