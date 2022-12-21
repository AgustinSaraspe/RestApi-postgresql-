import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb","postgres","987654321",{
  host: "localhost",
  dialect: "postgres"
});