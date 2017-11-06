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
          defaultValue: '0'
        }
      ),
      queryInterface.addColumn(
        'Characters',
        'rollMessage',
        {
          type: Sequelize.STRING,
          defaultValue: ''
        }
      )
    ];

  },

  down: function (queryInterface, Sequelize) {
    return [
        queryInterface.removeColumn(
        'Characters',
        'requestedRoll'
      ),
      queryInterface.removeColumn(
        'Characters',
        'submittedRoll'
      ),
      queryInterface.removeColumn(
        'Characters',
        'rollMessage'
      )
    ]
  }
};
