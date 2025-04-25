const express = require('express');
const router = express.Router();
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

router.post('/', createItem);
router.get('/', getItems);
router.get('/:id', getItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;
