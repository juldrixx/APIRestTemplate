require('dotenv').config();
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const API = require('./src');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Sandbox API',
      description: 'Sandbox API Information',
      contact: {
        name: 'Julien G.'
      },
      servers: ['http://localhost:3000']
    },
    basePath: '/api'
  },

  apis: ["src/index.js", "src/js/routes/*.routes.js", "src/js/routes/*/*.routes.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/api', API);
app.use('/', express.static('public'));
app.get('*', function (request, response){  
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});