const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const userController = require('./controller/userController');
const transferController = require('./controller/transferController');

const app = express();
app.use(express.json());

// Swagger endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// User routes
app.post('/register', userController.register);
app.post('/login', userController.login);
app.get('/users', userController.getUsers);

const authMiddleware = require('./middleware/authMiddleware');
// Transfer routes protegidas
app.post('/transfer', authMiddleware, transferController.transfer);
app.get('/transfers', authMiddleware, transferController.getTransfers);

module.exports = app;
