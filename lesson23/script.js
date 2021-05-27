// 1.Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

const age = +prompt("Сколько тебе лет?");
if (age >= 0 && age < 12) {
  alert(`Ты ребенок`);
} else if (age >= 12 && age < 18) {
  alert(`Ты тинейджер`);
} else if (age >= 18 && age < 60) {
  alert(`Ты взрослый`);
} else if (age >= 60 && age < 150) {
  alert(`Ты старик`);
} else if (age >= 150) {
  alert(`Поздравляем вы Джедай!`);
}

// 2.Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

const number = +prompt("Введите число от 0 до 9");
switch (number) {
  case "0":
    alert(`0 is :)`);
    break;
  case "1":
    alert(`1 is !`);
    break;
  case "2":
    alert(`2 is @`);
    break;
  case "3":
    alert(`3 is #`);
    break;
  case "4":
    alert(`4 is $`);
    break;
  case "5":
    alert(`5 is %`);
    break;
  case "6":
    alert(`6 is ^`);
    break;
  case "7":
    alert(`7 is &`);
    break;
  case "8":
    alert(`8 is *`);
    break;
  case "9":
    alert(`9 is (`);
    break;
  default:
    alert(`Введите корректное число`);
}

// 3.Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

const number = prompt("Введите трехзначное число");
if (
  number[0] == number[1] ||
  number[0] == number[2] ||
  number[1] == number[2]
) {
  alert(`TRUE (Здесь есть одинаковые цифры)`);
} else alert(`FALSE (Здесь нету одинаковых цифр)`);

// 4.Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

const year = +prompt("Введите Год:");
if (year % 4 == 0 && year % 100 !== 0) {
  alert(`Високосный год`);
} else alert(`Не Високосный год`);

// 5.Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

const number = +prompt("Введите пятизначное число");
if (number === number.split("").reverse().join("")) alert(`Палиндромом`);
else alert(`Не палиндромом`);

// 6.Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

const amount = prompt("Введите количество USD:");
const exchangeRates = prompt("EUR = 1, UAH = 2, AZN = 3");
switch (exchangeRates) {
  case "1":
    alert(`EUR: ${amount * 0.82}`);
    break;
  case "2":
    alert(`UAH: ${amount * 27.61}`);
    break;
  case "3":
    alert(`AZN: ${amount * 1.7}`);
    break;
}

// 7.Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%

const amount = prompt("Введите стоимость покупки:");
if (amount >= 0 && amount < 200) alert(`Скидка составляет 0% = ${amount}`);
else if (amount >= 200 && amount < 300)
  alert(`Со скидкой 3% = ${(amount / 100) * 97}`);
else if (amount >= 300 && amount < 500)
  alert(`Со скидкой 5% = ${(amount / 100) * 95}`);
else if (amount >= 500) alert(`Со скидкой 7% = ${(amount / 100) * 93}`);

// 8.Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

const circumference = prompt("Введите длину окружности :");
const perimeterSquare = prompt("Введите периметр квадрата :");
if (circumference / 3.14 <= perimeterSquare / 4) {
  alert("Ета окружность поместится в квадрат");
} else {
  alert("Ета окружность не поместится в квадрат");
}

// 9.Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

alert(`Введите ответ только цифрой`);
const javascript = +prompt(
  "Что такое javascript? \n1.Мультипарадигменный язык программирования.\n2.Полное название Java.\n3.Формальный язык описания внешнего вида документа."
);
const variable = +prompt(
  "Для создания переменной в JavaScript (которую можно изменить) используйте ключевое слово : \n1.let \n2.const \n3.if"
);
const data_types = +prompt(
  "Что не относиться к Типам данных: \n1.Boolean \n2.Null \n3.Const"
);
let point = 0;
if (javascript == 1) point += 2;
if (variable == 1) point += 2;
if (data_types == 3) point += 2;
{
  alert(`Your score is :${point}`);
}

// 10.Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

let date = prompt("Введите дату в таком формате : день-месяц-год");
date = date.split("-");
let oldDate = new Date(date[2], date[1] - 1, date[0]);
oldDate.setDate(oldDate.getDate() + 1);
alert(oldDate);
