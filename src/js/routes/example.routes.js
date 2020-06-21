const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /example:
 *  get:
 *    summary: Call example
 *    tags: [Example]
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *        description: Resource(s) not found
 */
router.get('/', (req, res) => {
  res.status('200').json(['Example']);
});

module.exports = router;