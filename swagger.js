const swaggerAutogen = require('swagger-autogen')();
const domain = process.env.NODE_ENV === "production"?"https://contacts-project-3h21.onrender.com":"http://localhost:3000"

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Description'
  },
  host: domain
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);