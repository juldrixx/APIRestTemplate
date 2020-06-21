const express = require('express');
const router = express.Router();
const routes = require('./js/routes');

/**
 * @swagger
 * tags:
 *  - name: Example
 *    description: Example of API call
 */
router.use('/example', routes.example);

module.exports = router;