const express = require('express');
const router = express.Router();
const service = require('../service.js');

router.get('/', async (req, res) => {
  // console.log('GET', res, res);
  const { q } = req.query;
  const products = await service.search(q);
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.searchById(id);
  res.json(product);
});

router.get('/:id/description', async (req, res) => {
  const { id } = req.params;
  const description = await service.getDescriptionById(id);
  res.json(description);
});

module.exports = router;
