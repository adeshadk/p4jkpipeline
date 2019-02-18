var expect  = require('chai').expect;
var request = require('request');

it('should return 200', function (done) {
    var options = {
      url: 'http://localhost:8081',
      headers: {
        'Content-Type': 'text/plain'
      }
    };
    request.get(options, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(res.body).contains('project 4');
      done();
    });
  });