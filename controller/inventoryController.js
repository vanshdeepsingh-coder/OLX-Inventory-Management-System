import Inventory from '../model/inventoryModel.js';
import CreateInventoryRequest from '../routes/validateRequests/createRequests.js';
import GetInventoryRequest from '../routes/validateRequests/getRequest.js'

const badRequestError=400;
const successfullyPost=201;
const success=200;
const internalServerError=500;

class InventoryController {
    constructor() {
        this.inventoryModel = new Inventory();
    }

    async create(req, res) {
        try {
            const createRequest=new CreateInventoryRequest(req,res);

            if(!createRequest.isValid(req,res)){
                throw new Error('Server is having a bad request, error code',badRequestError);
            }

            const InventoryModel = this.inventoryModel.getModel();
            const inventoryData = req.body;
            const newInventory = new InventoryModel(inventoryData);
            await newInventory.save();
            res.status(successfullyPost).json(newInventory);
        } catch (err) {
            res.status(internalServerError).json({ message: err.message });
        }
    }

    async getAll(req, res) {
        try {
            const getRequest=new GetInventoryRequest(req,res);

            if(!getRequest.isValid(req,res)){
                throw new Error('Server is having a bad request, error code',badRequestError);
            }

            const InventoryModel = this.inventoryModel.getModel();
            const inventoryItems = await InventoryModel.find();
            res.status(success).json(inventoryItems);
        } catch (err) {
            res.status(internalServerError).json({ message: err.message });
        }
    }

    async update(req, res) {
        try {
            const InventoryModel = this.inventoryModel.getModel();
            const {sku} = req.body;
            const inventoryData = req.body;
            const updatedInventory = await InventoryModel.findOneAndUpdate({ sku }, inventoryData, { new: true });
            res.status(success).json(updatedInventory);
        } catch (err) {
            res.status(internalServerError).json({ message: err.message });
        }
    }

    async delete(req, res) {
        try {
            const InventoryModel = this.inventoryModel.getModel();
            const {sku} = req.body;
            await InventoryModel.findOneAndDelete({ sku });
            res.status(success).json({ message: 'Inventory deleted successfully' });
        } catch (err) {
            res.status(internalServerError).json({ message: err.message });
        }
    }
};

export default InventoryController;