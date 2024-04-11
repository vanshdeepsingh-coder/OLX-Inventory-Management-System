const mongoose = require('mongoose');

class Inventory {
    constructor() {
        this.InventoryModel = mongoose.model('Inventory', this.getSchema());
    }