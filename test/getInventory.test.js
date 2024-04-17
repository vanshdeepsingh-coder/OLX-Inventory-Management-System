import express from 'express';
import supertest from 'supertest';
import routes from '../routes/Routes.js';

const app = express();

app.use('/', routes.initializeRouter());

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

    it('should return an empty array if there are no inventory items', async (done) => {
        request
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.be.empty;
            });

            done();
    });

    it('should return status 404 for an invalid endpoint', (done) => {
        request
            .get('/invalid-endpoint')
            .expect(404, done);
    });

    it('should handle server errors', (done) => {
        request
            .get('/')
            .query({ error: 'true' }) 
            .expect(500);

        done();
    });
});
