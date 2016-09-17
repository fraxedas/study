(function (fibonacci) {
    'use strict';

    fibonacci.sum_even = function (limit) {
        var first = 1;
        var second = 2;
        var fib = 0;
        var result = 0;
        while (second < limit) {
            if(second % 2 === 0)
            {
                result += second;
            }
            fib = first + second;
            first = second;
            second = fib;
        }
        return result;
    };

    


    
})(module.exports);