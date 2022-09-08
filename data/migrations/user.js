module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('user', {
            id: { type: Sequelize.UUID, primaryKey: true },
            password: { type: Sequelize.STRING, allowNull: false },
            lastName: { type: Sequelize.STRING(50), allowNull: false },
            firstName: { type: Sequelize.STRING(50), allowNull: false },
            accessTokenSalt: { type: Sequelize.STRING, allowNull: false },
            email: { type: Sequelize.STRING, allowNull: false, unique: true },
            createdAt: { type: Sequelize.DATE, allowNull: false },
            updatedAt: { type: Sequelize.DATE, allowNull: false }
        });
    },

    async down(queryInterface) {
        await queryInterface.dropTable('user', { cascade: true });
    }
};
