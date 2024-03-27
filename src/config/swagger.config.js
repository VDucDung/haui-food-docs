const env = require('./env.config');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'HaUI Food API Documentation',
    description: 'API Documentation for HaUI Food 🌱',
    termsOfService: 'https://hauifood.com/terms-of-service',
    contact: {
      name: env.email,
      email: env.email,
    },
    license: {
      name: 'Home page HaUI Food',
      url: 'https://hauifood.com',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: env.serverAPIProduction,
      description: 'Production Server',
    },
    {
      url: env.serverAPIDevelopment,
      description: 'Development Server',
    },
  ],
};

module.exports = swaggerDefinition;
