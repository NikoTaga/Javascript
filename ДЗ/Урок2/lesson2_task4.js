'use strict';

function addition(num1, num2){
    return num1 + num2;
};

function subtrac(num1, num2){
    return num1 - num2;
};

function multipl(num1, num2){
    return num1 * num2;
};

function divis(num1, num2){
    return num1 / num2;
};

let a = +prompt("введите 1-е число");
let b = +prompt("введите 2-е число");

alert("сумма = " + addition(a, b));
alert("разность = " + subtrac(a, b));
alert("умножение = " + multipl(a, b));
alert("деление = " + divis(a, b));

