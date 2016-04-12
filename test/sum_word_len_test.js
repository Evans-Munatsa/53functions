var sum = require("../sum_word_len");
var assert = require("assert");

describe("takes a sentence as a parameter", function() {
    it("returns the sum of the length of words in it", function() {
      var result = sum("my name is evans munatsa");
      assert.equal(result, 5);
    })
})