const internalServerError = 500;

class GetInventoryRequest {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    isValid(req,res) {
        const isValidRequest = req.body;
        if (!isValidRequest) {
            this.res.status(internalServerError).json({ message: 'Get failed to fetch' });
            return false;
        }

        return true;
    }
}

export default GetInventoryRequest;
