export default class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }

    create(request) {
        const isValid = this.validateRequest(request);
        if (!isValid) {
            return this.badRequestError();
        }
        const inventoryId = this.inventoryService.create(request);
        return this.createInventoryResponse(inventoryId);
    }

    update(request) {
        const isValid = this.validateRequest(request);
        if (!isValid) {
            return this.badRequestError();
        }
        const updatedInventory = this.inventoryService.update(request);
        return this.createInventoryResponse(updatedInventory.id);
    }

    delete(id) {
        this.inventoryService.delete(id);
        return { message: "Inventory deleted successfully" };
    }

    createInventoryResponse(inventoryId) {
        return { id: inventoryId };
    }
}