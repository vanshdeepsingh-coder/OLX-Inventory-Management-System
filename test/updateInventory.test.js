// import express from 'express';
// import supertest from 'supertest';

// const app = express();

// const mockInventoryData = [
//     { sku: 'SKU123', name: 'Product 1', quantity: 10 },
//     { sku: 'SKU456', name: 'Product 2', quantity: 20 }
// ];

// const request = supertest(app);

// describe('PUT /', async () => {
//     it('should update inventory and return status 200', (done) => {
//         request
//             .put('http://localhost:3000/inventory/update')
//             .send(mockInventoryData)
//             .expect(200)
//             .end((err, res) => {
//                 if (err) return done(err);
//                 expect(res.body).toEqual(mockInventoryData);
//                 done();
//             });
//     });
// });
