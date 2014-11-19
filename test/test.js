require('../')();
var assert = require('assert');
describe('flow-require', function(){
  it('should require with transform', function(){
    assert.ok(!!require.extensions['.flow.js'], true)
  })
})
