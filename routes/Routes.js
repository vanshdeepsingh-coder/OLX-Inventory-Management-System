import express from 'express';
import InventoryController from '../controller/inventoryController.js';

class Routes{

    initializeRouter(){
        const router=express.Router();

        const inventoryController = new InventoryController()

        router.post('/inventory', inventoryController.createInventory.bind(inventoryController));
        router.put('/inventory/update', inventoryController.updateInventory.bind(inventoryController));
        router.delete('/inventory/delete',inventoryController.deleteInventory.bind(inventoryController));
        router.get('/', inventoryController.getInventory.bind(inventoryController));

        return router;
    }
}

const routes=new Routes();
export default routes;
