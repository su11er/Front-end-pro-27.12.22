function closures (number1) {
    console.log(`sum(${number1}) = ${number1}`);
    return function (number2) {
        const result = number1 + number2
        console.log(`sum(${number2}) = ${result}`);
        return function (number3) {
            const resultTwo = result + number3;
            console.log(`sum(${number3}) = ${resultTwo}`)
        }
    }
}
closures(3)(5)(20);