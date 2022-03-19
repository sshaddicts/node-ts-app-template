'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable("user_models", {
            id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
            },
            first_name: Sequelize.DataTypes.STRING,
            last_name: Sequelize.DataTypes.STRING,
            username: Sequelize.DataTypes.STRING,
            number: Sequelize.DataTypes.STRING,
            auth_status: {
                type: Sequelize.DataTypes.ENUM,
                values: [
                    "PHONE_CHECKED",
                    "OK",
                    "BANNED"
                ],
            },
            created_at: Sequelize.DataTypes.DATE,
            updated_at: Sequelize.DataTypes.DATE
        }, { transaction });

        return transaction.commit();
    } catch (e) {
        console.log(e)
        await transaction.rollback();
        throw e;
    }
  },

  async down (queryInterface, Sequelize) {
      const transaction = await queryInterface.sequelize.transaction();
      try {
          await queryInterface.dropTable("user_models", { transaction });
          return transaction.commit()
      } catch (e) {
          console.log(e)
          await transaction.rollback();
          throw e;
      }
  }
};
