require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_TABLE } = process.env;
const {UserModel, FavoriteModel} = require("./models/Index");

// URL ----> `postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty`
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_TABLE}`,
   { logging: false, native: false }
);

UserModel(sequelize);
FavoriteModel(sequelize);

const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, {through: 'UserFavorite', foreignKey: 'user_id'});
Favorite.belongsToMany(User, {through: 'UserFavorite', foreignKey: 'favorite_id'});

module.exports = {
   //O ...sequelize.models para muchos
   ...sequelize.models,
   conn: sequelize,
};