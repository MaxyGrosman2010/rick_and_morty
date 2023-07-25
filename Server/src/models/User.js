const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         //Para ID's unicos UUID:
         type: DataTypes.UUID,
         defaultValue: DataTypes.UUIDV4,
         primaryKey: true,
         allowNull: false
         // type: DataTypes.INTEGER,
         // primaryKey: true,
         // allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            isEmail: true
         }
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      password: {
         //Para password correctamente: Buscar hashPassword en doc de Sequelize
         type: DataTypes.STRING
      },
      role: {
         type: DataTypes.ENUM('user', 'admin', 'super'),
         allowNull: false,
         defaultValue: 'user'
      }
   }, { timestamps: false });
};
