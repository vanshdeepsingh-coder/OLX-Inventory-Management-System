const Inventory = require('./inventoryModel');

class InventoryController {
    constructor() {
        this.inventoryModel = new Inventory();
    }

    async createInventory(req, res) {
        try {
            const InventoryModel = this.inventoryModel.getModel();
            const inventoryData = req.body;
            const newInventory = new InventoryModel(inventoryData);
            await newInventory.save();
            res.status(201).json(newInventory);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    async updateInventory(req, res) {
        try {
            const InventoryModel = this.inventoryModel.getModel();
            const sku = req.params.sku;
            const inventoryData = req.body;
            const updatedInventory = await InventoryModel.findOneAndUpdate({ sku }, inventoryData, { new: true });
            res.json(updatedInventory);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }