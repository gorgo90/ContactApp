const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    database: "user_db",
    user: "postgres",
    password: "170790",
  },
});

module.exports = knex;
