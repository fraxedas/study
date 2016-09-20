
var assert = require("assert");
var graph = require("../lib/graph");

describe('graph', function () {

    describe('path of 1 <-> 0 <-> 2', function () {

        var node;
        before(function () {
            var one = {
                number: 1,
                nodes: []
            };
            var zero = {
                number: 0,
                nodes: []
            };
            var two = {
                number: 2,
                nodes: []
            };
            one.nodes.push(zero);
            two.nodes.push(zero);
            zero.nodes.push(one);
            zero.nodes.push(two);
            node = one;
        });

        it('should return [1,0,2] when seaching for 2', function () {

            assert.deepEqual(graph.path(node, 2), [1, 0, 2]);

        });

        it('should return [1,0] when seaching for 0', function () {

            assert.deepEqual(graph.path(node, 0), [1, 0]);

        });

        it('should return [1] when seaching for 1', function () {

            assert.deepEqual(graph.path(node, 1), [1]);

        });
    });

    describe('buildPath of [1, undefined, 0]', function () {
        // 1 -> 0 -> 2
        var parent = [1, 1, 0];

        it('should return [1,0,2] when seaching for 2', function () {

            assert.deepEqual(graph.buildPath(parent, 2), [1, 0, 2]);

        });

        it('should return [1,0] when seaching for 0', function () {

            assert.deepEqual(graph.buildPath(parent, 0), [1, 0]);

        });

        it('should return [1] when seaching for 1', function () {

            assert.deepEqual(graph.buildPath(parent, 1), [1]);

        });
    });
});