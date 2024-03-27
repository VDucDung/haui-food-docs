const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const { env, swagger } = require('./config');

const app = express();

const specs = swaggerJsdoc({
  swaggerDefinition: swagger,
  apis: ['src/*.yml', 'src/routes/*.js'],
});

app.use('/', swaggerUi.serve);
app.get(
  '/',
  swaggerUi.setup(specs, {
    explorer: true,
  }),
);

app.listen(env.port, () => {
  console.log(`Server listening on port ${env.port}`);
});
