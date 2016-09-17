
var assert = require("assert");
var array = require("../lib/array");

describe('array', function () {

    describe('of [3,5,6,7,8,9]', function () {
        var nums = [3,5,6,7,8,9];

        it('should return true when seaching for 5', function () {

            assert.equal(array.binary_search(nums, 5), true);

        });

        it('should return false when seaching for 4', function () {

            assert.equal(array.binary_search(nums, 4), false);

        });
    });

});