(function (multiples) {
    'use strict';

    multiples.find = function (first, second, limit) {
        return multiple(first, limit) + multiple(second, limit) - multiple(first * second, limit);
    };

    var multiple = function (number, limit) {
        var times = Math.trunc((limit - 1) / number);
        var result  = number * times * (times + 1) / 2;
        return result;
    };


    
})(module.exports);