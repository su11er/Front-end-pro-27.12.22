let x = prompt('Введите первое число:');
x = parseInt(x)
let y = prompt('Введите второе число:');
y = parseInt(y)
let operator = prompt('Введите оператор (1=+, 2=-, 3=*, 4=/)');
let result;

if (operator==1) {
    alert(result = x+y);
 }
 else if (operator==2) {
    alert(result = x-y);
 }
 else if (operator==3) {
    alert(result = x*y);
 }
 else if (operator==4) {
    alert(result = x/y);
 }