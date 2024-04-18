import express from 'express';
import supertest from 'supertest';
import routes from '../routes/Routes.js';
import mockInventoryData from '../mockInventory/mockInventoryData.js';

const app = express();

app.use('/', routes.initializeRouter());

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
