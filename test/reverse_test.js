var hello_uppercase = require('../reverse');
var assert = require('assert');

describe("reverse", function(){
  it("should return 'my name is evans' in reverse", function(){
  	var result = hello_uppercase("users");
    assert.deepEqual(hello_uppercase(), ["Evans", "Roxan", "Mike", "Mashaba"]);
  });
});