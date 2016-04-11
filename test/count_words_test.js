var sentence = require("../count_words");
var assert = require("assert");

describe("returns the sum of the length of words", function(){
	it("takes a parameter and return a sum of words", function(){
		var result = sentence("my name is");
		assert.equal(sentence(), 20)
	})
})