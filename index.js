console.log(1);
const arr=[16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let positiveElement=arr.filter(el => el>0);
let sum=positiveElement.reduce((a,b)=>a+b);
console.log(`Сумма элементов: ${sum}. Количество положительных элементов: ${positiveElement.length}`);

console.log(2);
let minElement=Math.min(...arr);
let minElementIndex=arr.indexOf(minElement);
console.log(`Минимальный элемент: ${minElement}. Порядковый номер этого элемента: ${minElementIndex}`);

console.log(3);
let maxElement=Math.max(...arr);
let maxElementIndex=arr.indexOf(maxElement);
console.log(`Максимальный элемент: ${maxElement}. Порядковый номер этого элемента: ${maxElementIndex}`);

console.log(4);
let negativeElement=arr.filter(el => el<0);
console.log(`Количество негативных элементов: ${negativeElement.length}`);

console.log(5);
let positiveNotEven=arr.filter(el=>(el>0 && (el % 2 !== 0)));
console.log(`Количество положительных нечетных элементов: ${positiveNotEven.length}`);

console.log(6);
let positiveEven=arr.filter(el=>(el>0 && (el % 2 == 0)));
console.log(`Количество положительных четных элементов: ${positiveEven.length}`);

console.log(7);
let sumPosEven=positiveEven.reduce((a,b)=>a+b);
console.log(`Сумма положительных четных элементов: ${sumPosEven}`);

console.log(8);
let sumPosNotEven=positiveNotEven.reduce((a,b)=>a+b);
console.log(`Сумма положительных четных элементов: ${sumPosNotEven}`);

console.log(9);
let product=positiveElement.reduce((a,b)=>a*b);
console.log(`Произведение элементов: ${product}`);

console.log(10);
console.log(`Максимальный элемент: ${maxElement}`);
let maxIndex=arr.indexOf(maxElement);
arr.forEach((el,index,arr0)=>{ if (index!=maxIndex) arr0[index]=0; });
console.log(`Обнуление: ${arr}`);