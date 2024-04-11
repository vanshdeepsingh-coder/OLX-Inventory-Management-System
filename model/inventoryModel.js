const mongoose = require('mongoose');

class Inventory {
    constructor() {
        this.InventoryModel = mongoose.model('Inventory', this.getSchema());
    }

    getSchema() {
        return new mongoose.Schema({
            sku: { type: String, required: true },
            type: String,
            status: { type: String, enum: ['CREATED', 'PROCURED', 'SOLD'], default: 'CREATED' },
            location: String,
            attributes: {
                vin: String,
                make: String,
                model: String,
                trim: String,
                year: Number
            },
            pricing: {
                cost: Number,
                sellingPrice: Number
            },
            metadata: {
                createdAt: { type: Date, default: Date.now },
                lastUpdatedAt: { type: Date, default: Date.now },
                createdBy: String,
                lastUpdatedBy: String
            }
        });
    }