
var assert = require("assert");
var fibonacci = require("../lib/fibonacci");

describe('fibonacci', function () {

    describe('sum_even under', function () {

        it('10 should return 10', function () {

            var value = fibonacci.sum_even(10);
            assert.equal(value, 10);

        });

        it('13 should return 10', function () {

            var value = fibonacci.sum_even(13);
            assert.equal(value, 10);

        });

        it('4M should return ?', function () {

            var value = fibonacci.sum_even(4000000);
            assert.equal(value, 4613732);

        });
    });

});