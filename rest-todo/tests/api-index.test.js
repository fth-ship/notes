// file: tests/api-index.test.js - created at 2014-12-10, 08:26
var should = require('should');
var superagent = require('superagent');
var pkg = require('../package');

describe('apiIndex', function () {
  it('should be get api index', function (done) {
    function endHandler(err, res) {
      should.not.exist(err);
      res.body.name.should.be.eql(pkg.name);
      res.body.version.should.be.eql(pkg.version);
      done();
    }
    superagent
      .get('http://localhost:2000/api')
      .end(endHandler);
  });
});
