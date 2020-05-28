
const requireHelper = require('./requireHelper');
const apiv1 = requireHelper.require('routes/apiv1');
const assert = require('chai').assert;
const sinon = require('sinon');

// create mock request and response
let reqMock = {};

let resMock = {};
resMock.status = function() {
  return this;
};
resMock.send = function() {
  return this;
};
resMock.end = function() {
  return this;
};
sinon.spy(resMock, "status");
sinon.spy(resMock, "send");


describe('Get Weather', function() {

  it('request with no city name', function() {
    reqMock = {
      query: {
		city: ''
      }
    };

    apiv1.getWeather(reqMock, resMock);
    assert(resMock.send.lastCall.args[0].msg === 'Nothing to geocode', 'Unexpected response:' + resMock.send.lastCall.args);
  });

  /*it('request with a invalid city name', function() {
    reqMock = {
      query: {
        city: 'home'
      }
    };

    const request = function( obj, callback ){
      callback(null, null, {});
    };

    apiv1.__set__("request", request);

    apiv1.getWeather(reqMock, resMock);

    assert(resMock.status.lastCall.calledWith(404), 'Unexpected response:' + resMock.status.lastCall.args);
    assert(resMock.send.lastCall.args[0].msg === 'city not found', 'Unexpected response:' + resMock.send.lastCall.args);
  });*/
});

