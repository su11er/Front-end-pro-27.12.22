let str = '';
for (let a = 20; a <= 30; a=a+0.5) {
  str += a + ' ';
}
console.log(str.trim());

for (let b = 10; b <= 100; b = b + 10) {
    console.log(b*27);
}

const check = function*(n) {
    const limit = Math.min(100, Math.sqrt(n));
    let i = 1;
    while (i <= limit) {
      yield i++;
    }
  }
  let N = 49;//сюда ввести любое число
  for (const x of check(N)) {
    console.log(x);
  }

function defNumb(num) {
    if (num > 1) {
      for (let d = 2; d < num; d++) {
        if (num % d == 0) {
          return "Составное число";
        }
      }
      return "Простое число";
    } else {
      return "Число должно быть больше 1";
    }
  }
  console.log(defNumb(1));//сюда ввести любое число


  let e = 9;//сюда ввести любое число
  while (e % 3 == 0) {
    e /= 3;
}
console.log((e == 1)? "Число можно получить " : "Число нельзя получить")