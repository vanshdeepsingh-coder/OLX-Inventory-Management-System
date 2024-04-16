import express from 'express';
import supertest from 'supertest';
import routes from '../routes/Routes.js';

const app = express();

app.use('/', routes.initializeRouter());

const mockInventoryData = [
    { sku: 'SKU123', name: 'Product 1', quantity: 10 },
    { sku: 'SKU456', name: 'Product 2', quantity: 20 }
];

const request = supertest(app);

describe('GET /', async () => {
    it('should return status 200 and list of inventory items', (done) => {
        request
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual(mockInventoryData);
            });

            done();
    });
});
