const mockInventoryData = [
    {
        sku: "ABC123",
        type: "Car",
        status: "CREATED",
        location: "Warehouse A",
        attributes: {
            vin: "12345678901234567",
            make: "Toyota",
            model: "Camry",
            trim: "LE",
            year: 2022
        },
        pricing: {
            cost: 20000,
            sellingPrice: 25000
        },
        metadata: {
            createdAt: "2024-04-11T12:00:00Z",
            lastUpdatedAt: "2024-04-11T12:00:00Z",
            createdBy: "John Doe",
            lastUpdatedBy: "Jane Doe"
        }
    }
];

export default mockInventoryData;