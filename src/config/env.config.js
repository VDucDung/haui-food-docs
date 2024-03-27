require('dotenv').config();

const env = {
  port: process.env.PORT || 3000,
  email: process.env.EMAIL || 'info.example.com',
  serverAPIProduction: process.env.SERVER_API_PRODUCTION,
  serverAPIDevelopment: process.env.SERVER_API_DEVELOPMENT,
};

module.exports = env;
