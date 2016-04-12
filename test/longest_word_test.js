var longest = require('../longest_word');
var assert = require('assert');

describe("return the longest word", function(){
	it("takes a sentence as a parameter", function(){
		var result = longest("the weather");
		assert.equal(result, "Photosynthesis");
	})
})