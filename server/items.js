const router = require('express').Router();
const productsService = require('service');

router.get('/', async (req, res) => {
  const { q } = req.query;
  const products = await productsService.search(q);
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await productsService.searchById(id);
  res.json(product);
});

router.get('/:id/description', async (req, res) => {
  const { id } = req.params;
  const description = await productsService.getDescriptionById(id);
  res.json(description);
});

module.exports = router;
