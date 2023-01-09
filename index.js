let name = prompt('Введите ваше имя:');
let age = prompt('Введите важ возраст:', 18);
let smoke = confirm("Вы курите?")
if (age >= 18 && smoke == true) {
    alert(`Привет, ${name}, что ж, ты сам выбрал такой путь...`)
}
else if(age >= 18 && smoke == false) {
    alert(`Привет ${name}, здорово! Ты наверное еще и спортом занимаешься!`)
}
else if (age < 18 && smoke == true) {
    alert(`Привет ${name}! А родители знают об этом?`)
}
else if (age < 18 && smoke == false) {
    alert(`Привет ${name}! Верно, сейчас главное хорошо учиться!`)
}