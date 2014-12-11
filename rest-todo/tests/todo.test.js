// file: tests/todo.test.js - created at 2014-12-10, 08:39
var should = require('should');
var superagent = require('superagent');
var ch = require('charlatan');
var url = require('url');
var host = 'http://localhost:2000';

describe('todo', function () {
  var id = null; 

  it('should be post todo', function (done) {
    function endHandler(err, res) {
      should.not.exist(err);
      should.not.exist(res.body.err);
      res.body.result._id.should.have.lengthOf(24);
      res.body.status.should.be.ok;
      id = res.body.result._id;
      done();
    }
    superagent
      .post(url.resolve(host, '/api/todo'))
      .send({
        name: ch.Name.title()
      })
      .end(endHandler);
  });

  it('should be get todo', function (done) {
     function endHandler(err, res) {
      should.not.exist(err);
      should.not.exist(res.body.err);
      res.body.result.length.should.be.above(0);
      res.body.status.should.be.ok;
      done();
    }
    superagent
      .get(url.resolve(host, '/api/todo'))
      .end(endHandler);   
  });

  it('should be get todo by id', function (done) {
    function endHandler(err, res) {
      should.not.exist(err);
      should.not.exist(res.body.err);
      res.body.result._id.should.have.lengthOf(24);
      res.body.result.should.have.property('name');
      res.body.status.should.be.ok;
      done();
    }
    superagent
      .get(url.resolve(host, '/api/todo/' + id))
      .end(endHandler);   
  });

  it('should be put todo', function (done) {
   function endHandler(err, res) {
      should.not.exist(err);
      should.not.exist(res.body.err);
      res.body.result.should.be.eql(1);
      res.body.status.should.be.ok;
      done();
    }
    superagent
      .put(url.resolve(host, '/api/todo/' + id))
      .send({
        name: ch.Name.title()
      })
      .end(endHandler);     
  });

  it('should be put todo', function (done) {
   function endHandler(err, res) {
      should.not.exist(err);
      should.not.exist(res.body.err);
      res.body.result.should.be.eql(1);
      res.body.status.should.be.ok;
      done();
    }
    superagent
      .del(url.resolve(host, '/api/todo/' + id))
      .end(endHandler);     
  });
});
