'use strict';

function rubleInCorrectCase(genWord) {
    if ((genWord >= 11) && (genWord < 20)) {
        return "рублей";
    } else {
        switch (genWord % 10) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return "рублей";
            case 1:
                return "рубль";
            case 2:
            case 3:
            case 4:
                return "рубля";
        }
    }

}

let quantityOfMoney = +prompt("Какое количество денег Вы хотите положить на счет?");
let lastDigits = quantityOfMoney % 100;

alert("Ваша суммма в " + quantityOfMoney + " " + rubleInCorrectCase(lastDigits) + " успешно зачислена");
