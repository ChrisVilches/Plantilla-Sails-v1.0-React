var assert = require('assert');

describe('EnvironmentService', function() {

  describe('#getSails()', function() {
    it('should check getSails function', function () {
      assert.equal(EnvironmentService.getSails(), "sails");
    });
  });

});
