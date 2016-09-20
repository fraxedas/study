
(function (graph) {
    'use strict';

    var node = {
        number: 0,
        nodes: []
    };

    graph.path = function (start, finish) {
        var parent = [];
        var queue = [];
        queue.push(start);
        parent[start.number] = start.number;

        while (queue.length > 0) {
            var node = queue.shift();
            if (node.number === finish) return graph.buildPath(parent, finish);

            for (var i = 0; i < node.nodes.length; i++) {
                var element = node.nodes[i];
                if (isNaN(parent[element.number])) {
                    parent[element.number] = node.number;
                    queue.push(element);
                }
            }
        }
        return [];
    };

    graph.buildPath = function (parent, finish) {
        var result = [];
        var number = finish;

        while (number !== parent[number]) {
            result.push(number);
            number = parent[number];
        }
        result.push(number);
        return result.reverse();
    }



})(module.exports);