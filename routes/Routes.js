import express from 'express';
import InventoryController from '../controller/inventoryController.js';

class Routes{

    initializeRouter(){
        const router=express.Router();

        const inventoryController = new InventoryController()

        router.post('/inventories/new', inventoryController.create.bind(inventoryController));
        router.put('/inventories/::{id}', inventoryController.update.bind(inventoryController));
        router.delete('/inventories/:{id}',inventoryController.delete.bind(inventoryController));
        router.get('/inventories', inventoryController.getAll.bind(inventoryController));

        return router;
    }
}

const routes=new Routes();
export default routes;
