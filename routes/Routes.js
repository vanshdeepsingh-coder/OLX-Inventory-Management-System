const express = require('express');
const InventoryController = require('../controller/inventoryController');

const router = express.Router();
const inventoryController = new InventoryController()

router.post('/inventory', inventoryController.createInventory.bind(inventoryController));
router.put('/inventory/:sku', inventoryController.updateInventory.bind(inventoryController));
router.delete('/inventory/:sku', inventoryController.deleteInventory.bind(inventoryController));
router.get('/',inventoryController.createInventory.bind(inventoryController));

module.exports = router;
