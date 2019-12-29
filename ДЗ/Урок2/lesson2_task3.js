'use strict';

let a = +prompt("введите 1-е число");
let b = +prompt("введите 2-е число");
                

if ((a >= 0) && (b >= 0)) {
    alert(a - b);
}
else if ((a < 0) && (b < 0)) {
    alert(a * b);
}
else if (Math.sign(a) != Math.sign(b)) {
    alert(a + b);
};