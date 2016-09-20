
(function (number) {
    'use strict';

    /**
     * Write a program to check whether a given number is an ugly number.
     * Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
     * Note that 1 is typically treated as an ugly number.
     * https://leetcode.com/problems/ugly-number/
     */
    number.isUgly = function (num) {
        var done;
        if(num === 0) return false;
        var list = [5, 3, 2];
        for (var i = 0; i < list.length; i++) {
            done = false;
            while (!done) {
                if (num % list[i] === 0) {
                    num = num / list[i];
                } else {
                    done = true;
                }
            }
        }

        return num === 1;
    };





})(module.exports);