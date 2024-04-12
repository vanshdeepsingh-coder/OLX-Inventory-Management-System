const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./server');

describe('Server',() => {
    it('should connect to MongoDB', (done) =>{
        expect(server.connectToDB()).to.eventually.be.fulfilled.and.notify(done);
    })
})