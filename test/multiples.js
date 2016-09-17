
var assert = require("assert");
var multiples = require("../lib/multiples");

describe('multiples', function () {

    describe('of 3 or 5', function () {

        it('below 10 should return 23', function () {

            var value = multiples.find(3, 5, 10);
            assert.equal(value, 23);

        });

        it('below 1000 should return 233168', function () {

            var value = multiples.find(3, 5, 1000);
            assert.equal(value, 233168);

        });
    });

});