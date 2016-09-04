var User = require('../models/users');

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app')
var should = chai.should();


chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => {
    User.remove({}, (err) => {
      done();
    })
  });

  describe('/GET users', () => {
    it('it should GET all the user', (done) => {
      chai.request(app)
        .get('/api/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        })
    });
  });

  describe('/POST users', () => {
    it('it should POST user', (done) => {
      var user = {

      }
      chai.request(app)
        .post('/api/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.should.have.property('email');
          res.body.errors.email.should.have.property('kind').eql('required');
          done();
        })
    })
  })
});
