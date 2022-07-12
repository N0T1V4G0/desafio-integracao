const config = {
  development: {
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'mysql_db',
    host: process.env.MYSQL_HOST || 'mysql_db',
    dialect: 'mysql',
  },
  postgres: {
    username: process.env.POSTGRES_USER || 'root',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: 'postgres_db',
    host: process.env.POSTGRES_HOST || 'postgres_db',
    dialect: 'postgres',
  },
};

module.exports = config;
