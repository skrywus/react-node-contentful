var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect();
var server = require('../app');

chai.use(chaiHttp);

describe('/api/categories GET', () => {
    it('returns 200', (done) => {
        chai.request(server)
            .get('/api/categories')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            })
    });
    it('returns "message" property', (done) => {
        chai.request(server)
            .get('/api/categories')
            .end((err, res) => {
                res.body.should.have.property('message').that.is.not.empty;
                done();
            })
    });
});

