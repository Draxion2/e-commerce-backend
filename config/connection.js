// import sequelize from the package
const Sequelize = require("sequelize");
require("domain").config();

let sequelize;

// create connection to database using username and password
sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: "localhost",
        dialect: "mysql",
        port: 3306
    }
)

module.exports = sequelize;