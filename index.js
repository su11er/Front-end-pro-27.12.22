function removeElement(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
console.log(removeElement([1,2,3,4,5,6,7,,8,9,0], 5)) // сюда ввести любые значения