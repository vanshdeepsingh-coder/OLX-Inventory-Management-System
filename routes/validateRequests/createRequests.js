const internalServerError = 500;

class CreateInventoryRequest {
    constructor(req,res) {
        this.body = res.body;
    }

    validate() {
        const {name, quantity} = this.body;
        if (!name || !quantity) {
            throw new Error('SKU, name, and quantity are required fields');
        }
    }

    isValid(req, res) {
        try {
            this.validate();
            res.status
        } catch (error) {
            res.status(internalServerError).json({ message: error.message });
        }
    }
}

export default CreateInventoryRequest;
