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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "сложение":
            alert("сумма = " + addition(arg1, arg2));
            break;
        case "вычитание":
            alert("разность = " + subtrac(arg1, arg2));
            break;
        case "умножение":
            alert("умножение = " + multipl(arg1, arg2));
            break;
        case "деление":
            alert("деление = " + divis(arg1, arg2));
            break;
        default:
            alert("некорректно указаны параметры");
    }
}

let arg1 = +prompt("введите 1-е число");
let arg2 = +prompt("введите 2-е число");
let arg3 = prompt("введите арифметическое действие")

mathOperation(arg1, arg2, arg3);
