import Inventory from '../model/inventoryModel.js';

const badRequestError=400;
const successfullyPostCode=201;

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
            res.status(successfullyPostCode).json(newInventory);
        } catch (err) {
            res.status(badRequestError).json({ message: err.message });
        }
    }

    async getInventory(req, res) {
        try {
            const InventoryModel = this.inventoryModel.getModel();
            const inventoryItems = await InventoryModel.find();
            res.json(inventoryItems);
        } catch (err) {
            res.status(badRequestError).json({ message: err.message });
        }
    }

    async updateInventory(req, res) {
        try {
            const InventoryModel = this.inventoryModel.getModel();
            const {sku} = req.body;
            const inventoryData = req.body;
            const updatedInventory = await InventoryModel.findOneAndUpdate({ sku }, inventoryData, { new: true });
            res.json(updatedInventory);
        } catch (err) {
            res.status(badRequestError).json({ message: err.message });
        }
    }

    async deleteInventory(req, res) {
        try {
            const InventoryModel = this.inventoryModel.getModel();
            const {sku} = req.body;
            await InventoryModel.findOneAndDelete({ sku });
            res.json({ message: 'Inventory deleted successfully' });
        } catch (err) {
            res.status(badRequestError).json({ message: err.message });
        }
    }
};

export default InventoryController;