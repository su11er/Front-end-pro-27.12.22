// 1
// let array = ['qwr', 'qwe', NaN, 'wqe', 'qwe', 'rew', 'ewtr', 'fbd', 'sdv', 1, 12, 1, 5, 1, 7, 1, 1, 1, 1, 'end'];
// let count = 0;
// console.log(array.reduce((a, b) => {
//   if (typeof b == "number" && !isNaN(b)) {
//     ++count;
//     return a += b;
//   } else return a
// }, 0) / count || 0);

//2
// function doMath(x, znak, y) {
//     if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Ошибка';
//     return eval(x + znak.replace('^', '**') + y)
//   }
//   const x = prompt('Введите x');
//   const y = prompt('Введите y');
//   const znak = prompt('Введите знак');
//   alert(doMath(x, znak, y))

//3
// const mainN = prompt('Введите длину главного массива');
// const subN = prompt('Введите длину внутренних массивов');
// const arr = new Array(+mainN).fill(0)
//   .map((_, ind) =>
//     new Array(+subN).fill(0).map((_, i) => prompt(`Введите элемент ${i} в подмассиве ${ind}`)));
// alert('Ваш массив:' + arr.map(subArr => '\n' + subArr));
