require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const app = express();
const API = require('./src');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Rest',
      description: 'API Rest template.',
      contact: {
        name: 'Julien G.'
      },
    },
    servers: [{ url: '/api' }],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    }
  },
  apis: ["src/index.js", "src/js/routes/*.route.js", "src/js/routes/*/*.route.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(cors());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/api', API);
app.use('/', express.static('public'));
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});