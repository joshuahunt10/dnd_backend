'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return[
      queryInterface.addColumn(
        'Characters',
        'requestedRoll',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false
        }
      ),
      queryInterface.addColumn(
        'Characters',
        'submittedRoll',
        {
          type: Sequelize.STRING,
          defaultValue: 'false'
        }
      )
    ];

  },

  down: function (queryInterface, Sequelize) {
    return [
        queryInterface.removeColumn(
        'Games',
        'requestedRoll'
      ),
      queryInterface.removeColumn(
        'Games',
        'submittedRoll'
      )
    ]
  }
};
