alert(`Ну что Погнали :)`);

const nam = prompt("Введите ваше имя:");
alert(`Привет, ${nam} !`);

const this_year = 2021;
const year = +prompt("Укажите год вашего рождения:");
alert(`Вам: ${this_year - year} :)`);

const long = +prompt("Укажите длину стороны квадрата:");
alert(`Периметр квадрата: ${long * 4}`);

const pi = 3.14;
const radius = +prompt("Укажите радиус круга:");
alert(`Площадь такого круга будет: ${pi * radius ** 2}`);

const distance = +prompt("Укажите расстояние между городами в Километрах:");
const time = +prompt("Укажите время за которое вы хотите доехать:");
alert(`Необходимая скорость: ${distance / time}км/ч`);

const Euro = 1.21;
const dollar = +prompt("Укажите количество долларов:");
alert(`В евро это будет: ${dollar * Euro}EUR`);

const file = 820;
const flash_drive_volume = +prompt("Укажите объем флешки в Гб:");
alert(
  `Количество файлов (820мб) которое поместиться на флешку: ${
    (flash_drive_volume * 1000) / file
  }`
);

const money = +prompt("Введите количество денег которое у вас есть:");
const price = +prompt("Укажите цену одной Шоколадки:");
alert(
  `Количество шоколада: ${~~(money / price)}
   Остаток денег:${money % price}`
);

function flipInt(n) {
  var digit,
    result = 0;

  while (n) {
    digit = n % 10;
    result = result * 10 + digit;
    n = (n / 10) | 0;
  }

  return result;
}

alert(
  "Обратный порядок чисел: " + flipInt(+prompt("Введите трехзначное число:"))
);

const Deposit_amount = +prompt("Введите сумму вклада (грн):");
const interest_rate_year = 5;
alert(`Проценты за два месяца: ${(((Deposit_amount / 100) * 5) / 12) * 2}`);
